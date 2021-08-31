require('dotenv').config()
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const db = require('../../db');

const { getQueries, channelData, searchQuery, videoData } = require('./apiController');
const models = require('../models');


(async () => {
  // 임시로 배열 작성
  const queriesObjs = getQueries();
  const queriesList = Object.values(queriesObjs);

  for (const queries of queriesList) {
    const obj = {};
  }



  const queries = ['군만두', '에드워드 권 집콕 집콕'], // Examples
        queries_len = queries.length;

  let _videos = [], _channels = [];

  const youtube = google.youtube('v3');

  for (let i=0; i<queries_len; i+=1) {
    // 검색어 배열에 대해서 유튜브 API에 데이터 요청
    await searchQuery(youtube, queries[i])
            .then(async items => {
              const videoIds = [],
                    channelIds = [];

              // 검색된 비디오, 채널 분리
              const items_len = items.length;
              for (let i = 0; i < items_len; i+=1) {
                const { kind, videoId, channelId } = items[i].id;
                if (kind === 'youtube#video' && videoId) videoIds.push(videoId);
                if (kind === 'youtube#channel' && channelId) channelIds.push(channelId);
              }

              // 비디오, 채널 Id 배열을 문자열로 연결
              const _videoIds = videoIds.join(','),
                    _channelIds = channelIds.join(',');
              console.log(`videoIds: ${_videoIds}`); // 에러 체크 용도
              
              // 해당되는 비디오들에 대해서 유튜브 API에 데이터 요청
              await videoData(youtube, queries[i], _videoIds)
                      .then(async objs => {
                        // ES6 ...(Spread Operator)
                        // 중첩 배열 방지
                        _videos.push(...objs);
                        console.log('Successfully added all video information to the array.');

                        // 위의 channelIds 변수와 별개의 변수
                        // 데이터베이스에 저장된 채널 Id의 중복 방지
                        const channelIds = await Promise.all(objs.map(obj => obj.channelId)
                                                                 .filter(async id => {
                                                                   const isChannel = await models.Channel.findOne({ id: id });
                                                                   return isChannel ? false : true;
                                                                 }));
                        const _channelIds = channelIds.join(',');
                        console.log(`channelIds: ${_channelIds}`);

                        if (_channelIds === '') return;
                        
                        // 해당되는 채널들에 대해서 유튜브 API에 데이터 요청
                        await channelData(youtube, _channelIds)
                                .then(objs => {
                                  // ES6 ...(Spread Operator)
                                  // 중첩 배열 방지
                                  _channels.push(...objs);
                                  console.log('Successfully added all channel information to the array.');
                                });


                      });

            });
  }

  // 테스트를 위한 로그
  // 정확한 배열 및 객체 확인을 위해 문자열 밖에 변수 작성
  console.log(`videos:\n`, _videos, `\n\nchannels:\n`, _channels);
  fs.writeFileSync(path.join(__dirname, 'infoList.json'), JSON.stringify({_videos, _channels}));

  // 비디오 데이터 데이터베이스 저장
  _videos.forEach(el => {
    const videoDoc = new models.Video(el);
    videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
  });

  // 채널 데이터 데이터베이스 저장
  _channels.forEach(el => {
    const channelDoc = new models.Channel(el);
    channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
  })
})();