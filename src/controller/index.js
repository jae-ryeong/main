require('dotenv').config()
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const db = require('../../db');

const { getQueries, channelData, searchQuery, videoData } = require('./apiController');
const models = require('../models');
const Channel = require('../models/Channel');

async function _fn_request (youtube) {
  const _videos = [], _channels = [];

  for (let i=0; i<this.queries_len; i+=1) {
    await searchQuery(youtube, this.queries[i])
          .then(async items => {
            // 검색된 비디오 및 채널 분리
            const videoIds = [], channelIds = [];

            const items_len = items.length;
            for (let i=0; i<items_len; i+=1) {
              const id = items[i].id;
              if (id.kind === 'youtube#video' && id.videoId) videoIds.push(id.videoId);
              if (i === 0 && id.kind === 'youtube#channel' && id.channelId) channelIds.push(id.channelId);
            }

            // Ids 배열을 문자열로 연결
            const _videoIds = videoIds.join(',');
            const _channelIds = channelIds.join(',');

            console.log(`videoIds: ${videoIds}\nchannelIds: ${channelIds}`); // 에러 체크 용도 콘솔 표시
            
            await videoData(youtube, this.queries[i], _videoIds)
                  .then(async objs => {
                    _videos.push(...objs); // 중첩 배열 방지, 문제 해결: Spread Operator
                    console.log('Successfully added all video information to the array.'); // 모든 비디오 정보 객체를 배열에 추가

                    // 데이터베이스에 저장된 채널 Id의 중복 방지
                    const channelIds = await Promise.all(objs.map(obj => obj.channelId)
                                                             .filter(async id => {
                                                                const isChannel = await models.Channel.findOne({ id: id });
                                                                return isChannel ? false : true;
                                                             }));
                    const _channelIds = channelIds.join(','); // 채널Id 배열을 문자열로 연결
                    console.log(`channelIds: ${_channelIds}`); // 에러 체크 용도

                    if (_channelIds === '') return;

                    await channelData(youtube, _channelIds)
                          .then(objs => {
                            _channels.push(...objs); // 중첩 배열 방지, 문제 해결: Spread Operator
                            console.log('Successfully added all channel information to the array.'); // 중복을 제외한 모든 채널 정보 객체를 배열에 추가
                          });
                  })
          })
  }

  // 테스트를 위한 로그
  // 정확한 배열 및 객체 확인을 위해 문자열 밖에 변수 작성
  console.log(`videos:\n`, _videos, `\n\nchannels:\n`, _channels);
  fs.writeFileSync(path.join(__dirname, 'infoList.json'), JSON.stringify({_videos, _channels}));

  return { _videos, _channels };
}

(async () => {
  const youtube = google.youtube('v3');

  const queriesObjs = Object.values(getQueries());
  const quereisObjs_len = queriesObjs.length;

  const tmpModels = models;
  const videoDocs = [new tmpModels.Meal, new tmpModels.Snack, new tmpModels.Sports, new tmpModels.Diet, new tmpModels.Wellbeing];

  for (let i=0; i<quereisObjs_len; i+=1) {
    // 해당 객체에 대한 유튜브 검색 데이터 요청
    const obj = {
      queries = queriesObjs[i],
      queries_len = queriesObjs[i].length,
    };

    const { _videos, _channels } = await _fn_request.call(obj, youtube);

    // 해당 종류의 비디오 데이터 데이터베이스 저장
    _videos.forEach(el => {
      const videoDoc = videoDocs[i](el);
      videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
    })

    // 채널 데이터 데이터베이스 저장
    _channels.forEach(el => {
      const channelDoc = new Channel(el);
      channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
    })
  }
})();