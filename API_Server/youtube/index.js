require('dotenv').config();

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const apiController = require('../controller/apiController');
const db = require('../db');
const models = require('../models');

const fnGetQueries = _list => {
  const dic = Object.values(_list).reduce((obj, t) => {
    Object.keys(t).forEach(key => {
      if (obj[key]) obj[key].push(...t[key]);
      else obj[key] = [...t[key]];
    })
    return obj;
  }, {});

  Object.keys(dic).forEach(key => {
    const set = new Set(dic[key]);
    dic[key] = [...set];
  });

  fs.writeFileSync(path.join(__dirname, `result/cookingElements.json`), JSON.stringify(dic));

  return dic;
};

const fnDoShuffle = _arr => {
  for (let i=_arr.length-1, arr=_arr; i>0; --i) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

async function fnRequest (_youtube) {
  const videos = [], channels = [];

  for (let i=0; i<this.queriesLen; ++i) {
    await apiController.searchQuery(_youtube, this.queries[i])
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

            console.log('videoIds:', _videoIds, '\nchannelIds:', _channelIds); // 에러 체크 용도 콘솔 표시
            
            await apiController.videoData(_youtube, this.queries[i], _videoIds)
                  .then(async objs => {
                    videos.push(...objs); // 중첩 배열 방지, 문제 해결: Spread Operator
                    console.log('Successfully added all video information to the array.'); // 모든 비디오 정보 객체를 배열에 추가

                    // 데이터베이스에 저장된 채널 Id의 중복 방지
                    const channelIds = await Promise.all(objs.map(obj => obj.channelId)
                                                             .filter(async id => {
                                                                const isChannel = await models.Channel.findOne({ id: id });
                                                                return isChannel ? false : true;
                                                             }));
                    const _channelIds = channelIds.join(','); // 채널Id 배열을 문자열로 연결
                    console.log('channelIds:', _channelIds); // 에러 체크 용도 콘솔 표시

                    if (_channelIds === '') return;

                    await apiController.channelData(_youtube, _channelIds)
                          .then(objs => {
                            channels.push(...objs); // 중첩 배열 방지, 문제 해결: Spread Operator
                            console.log('Successfully added all channel information to the array.'); // 중복을 제외한 모든 채널 정보 객체를 배열에 추가
                          });
                  })
          })
  }

  return { videos, channels };
};

(async () => {
  const youtube = google.youtube('v3');

  const queriesArrs = Object.values(fnGetQueries(require('./tmp')));
  const queriesArrsLen = queriesArrs.length;

  const tmpModels = models;
  const videoModels = [tmpModels.Meal, tmpModels.Snack, tmpModels.Sports, tmpModels.Diet, tmpModels.Wellbeing];

  for (let i=0, qArrs=queriesArrs, vModels=videoModels, cModel=tmpModels.Channel; i<queriesArrsLen; ++i) {
    fnDoShuffle(qArrs[i]);
    const queries = qArrs[i].slice(0, 2);

    const obj = {
      queries: queries,
      queriesLen: queries.length,
    }

    console.log(queries);

    const { videos, channels } = await fnRequest.call(obj, youtube);

    // 테스트를 위한 로그
    // 정확한 배열 및 객체 확인을 위해 문자열 밖에 변수 작성
    console.log(`videos:\n`, videos, `\n\nchannels:\n`, channels);
    fs.writeFileSync(path.join(__dirname, `result/infoList${i}.json`), JSON.stringify({videos, channels}));

    videos.forEach((el, j) => {
      const vDoc = new vModels[i](el);
      vDoc.save(err => err ? console.error(err) : process.stdout.write(`${j} `));
    });

    process.stdout.write('\n');

    channels.forEach((el, j) => {
      const cDoc = new cModel(el);
      cDoc.save(err => err ? console.error(err) : process.stdout.write(`${j} `));
    });
  }
})();