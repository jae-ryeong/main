const { google } = require('googleapis');
require('dotenv').config();
const { channelData, getQueries, searchChannels, searchQuery, videoData } = require('./controller/apiController');
const Video = require('./models/Video');
const Channel = require('./models/Channel');
const options = require('./config/options');

const testController = {
  saveVideo: async youtube => {
    const ids = ['ffuakdFmuh4&t=2s', '9Hw11HH0Rzw', '3-xgRrEX-sQ', 'RWVLndO2Ohs', 's7bddRKNJGc', 'TDx0ZEHMhsY'];
    const _ids = ids.join(',');
    options.videos.id = _ids;

    const response = await youtube.videos.list(options.videos);
    const { items } = response.data;

    const _videos = [];

    items.map(item => {
      const { id, snippet, statistics } = item;
      const url = `https://www.youtube.com/watch?v=${id}`;

      const { channelId, title, description, thumbnails } = snippet;
      const thumbnail = thumbnails.default.url;

      const { viewCount, likeCount, commentCount } = statistics;

      _videos.push({url, channelId, title, thumbnail});
    })
    
    console.log(_videos);

    // _videos.map(el => {
    //   const videoDoc = new Video(el);
    //   videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
    // })
  },

  saveChannel: async youtube => {
    const ids = ['UCC9pQY_uaBSa0WOpMNJHbEQ', 'UCyn-K7rZLXjGl7VXGweIlcA', 'UCy2WX3w5UyYFHBDHyWFKNUQ', 'UCKA_6r3CWC76x_EaFO6jsPA', 'UCNdERLUICkazXRMp0_ZSKMw', 'UCzYiW6Gf00MMf6IEByG9gCg'];
    const _ids = ids.join(',');
    options.channels.id = _ids;

    const response = await youtube.channels.list(options.channels);
    const { items } = response.data;

    const _channels = [];

    items.map(item => {
      const { id, snippet, statistics } = item;
      const url = `https://www.youtube.com/channel/${id}`;

      const { title, thumbnails } = snippet;
      const thumbnail = thumbnails.default.url;

      const { viewCount, commentCount, subscriberCount, videoCount } = statistics;

      _channels.push({id, url, title, thumbnail});
    })
    
    console.log(_channels);


    _channels.map(el => {
      const channelDoc = new Channel(el);
      channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
    });
  },

  retreiveChannel: () => {
    const ids = ['UCC9pQY_uaBSa0WOpMNJHbEQ', 'UCyn-K7rZLXjGl7VXGweIlcA', 'UCy2WX3w5UyYFHBDHyWFKNUQ', 'UCKA_6r3CWC76x_EaFO6jsPA', 'UCNdERLUICkazXRMp0_ZSKMw', 'UCzYiW6Gf00MMf6IEByG9gCg'];
    const _ids = ids.join(',');

    ids.map(async id => {
      const isChannelId = await Channel.findOne({ id: id });

      console.log(typeof isChannelId)
      console.log(isChannelId);

      if (isChannelId) {
        console.log(`${id} is existed. code:${isChannelId}`);
      } else {
        console.log(`${id} is not existed. code:${isChannelId}`);
      }
    });
  },

  getChannelIds: async () => {
    try {
      const objs = ['UCC9pQY_uaBSa0WOpMNJHbEQ', '4UCyn-K7rZLXjGl7VXGweIlcA', '5UCy2WX3w5UyYFHBDHyWFKNUQ', '6UCKA_6r3CWC76x_EaFO6jsPA', 'UCNdERLUICkazXRMp0_ZSKMw', 'UCzYiW6Gf00MMf6IEByG9gCg']
      const channelIds = [];
      await Promise.all(objs.map(async obj => {
        const isChannel = await Channel.findOne({ id: obj });
        if (isChannel) return
        channelIds.push(obj);
      }));
      // for (const obj of objs) {
      //   const isChannel = await Channel.findOne({ id: obj });
      //   if (isChannel) continue;
      //   channelIds.push(obj);
      // }
      console.log(3);
      const _channelIds = channelIds.join(',');
      console.log(2, _channelIds);
    } catch (err) {
      console.error(err.message);
    }
  },

  testPromise: async () => {
    console.log(2);
    return 3;
  },

  testPromise2: async () => {
    return 1;
  },

  getQueries: () => {
    return getQueries();
  },
};

// const db = require('./db');

// (async () => {
//   // const service = google.youtube('v3');

//   // await testController.saveVideo(service);
//   // await testController.saveChannel(service);
//   // await testController.getChannelIds();

//   console.log(1);

//   testController.testPromise().then(result => console.log(result));

//   console.log(4);
// })();

// const testPromise = async () => {
//   console.log(2);
//   return 3;
// }

(async () => {
  // console.log(1);

  // await testPromise().then(async x => console.log(x));

  // console.log(4);
  const nestedObj = {
    yong: {
      a: ['볶음', '국수', '스파게티', '면', '불닭', '구이'],
      b: ['땅콩', '호두', '과자', '쿠키', '빵'],
      c: ['저칼로리 요리', '선식', '생식', '오트밀', '야채주스'],
      d: ['고칼로리 요리', '멸치를 위한 요리', '고단백', '닭가슴살 요리'],
      e: ['선식', '생식', '견과류', '아이스크림', '야채 주스'],
    },
    lee: {
      a: ['에드워드 권 집콕 집콕', '깽스키친', '승우아빠 레시피 요리', '국밥 레시피', '부침개', '오징어 볶음'],
      b: ['라면 레시피', '튀김 요리'],
      c: ['저칼로리 레시피', '저탄수화물 레시피'],
      d: ['랭킹닭컴 추천'],
      e: ['가지 요리'],
    },
    jung: {
      a: ['김치찌개', '콩나물국', '된장국', '순두부 찌개', '스파게티', '쫄면', '볶음밥', '백종원의 요리비책', '만개의 레시피'],
      b: ['스무디', '에이드', '쿠키', '케이크', '그릭복숭아', ],
      c: ['샐러드', '샌드위치'],
      d: ['닭가슴살', '단백질 보충제', '벌크업 식단', '365일 복근 유지 식단', '근육 1타 강사 황철순이 알려주는 프로틴 복용법', '내돈내산 닭가슴살 추천 영상', '닭가슴살 뭐 먹지?'],
      e: ['샐러드', '죽', '해독주스'],
    },
    kim: {
      a: ['밥 짓는 법', '라면', '찌개', '고기', '생선'],
      b: ['에어프라이기', '음료', '쿠키', '전자레인지 간편식'],
      c: ['닭가슴살', '계란', '샐러드', '저지방 고단백', '연예인 식단'],
      d: ['닭가슴살', '저지방 고단백', '트레이너 식단'],
      e: ['잡곡밥', '균형 잡힌 식단', '야채주스'],
    },
  }

  const queries = testController.getQueries(nestedObj);
  console.log(queries);
})();