const { google } = require('googleapis');
require('dotenv').config();
// const db = require('./db');
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

      _channels.push({url, title, thumbnail});
    })
    
    console.log(_channels);


    // _channels.map(el => {
    //   const channelDoc = new Channel(el);
    //   channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
    // });
  }
};

(async () => {
  const service = google.youtube('v3');

  // await testController.saveVideo(service);
  await testController.saveChannel(service);
})();