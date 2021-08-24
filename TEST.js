const { google } = require('googleapis');
require('dotenv').config();
const { channelData, getQueries, searchChannels, searchQuery, videoData } = require('./src/controller/apiController');
const Video = require('./src/models/Video');
const Channel = require('./src/models/Channel');
const options = require('./src/config/options');

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

  }
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

const testPromise = async () => {
  console.log(2);
  return 3;
}

(async () => {
  console.log(1);

  await testPromise().then(async x => console.log(x));

  console.log(4);
})();