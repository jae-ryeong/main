require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');

const { channelData, searchQuery, videoData } = require('./apiController');
const Video = require('../models/Video');
const Channel = require('../models/Channel');


(async () => {
  // const queries = getQueries();
  const queries = ['떡볶이'];

  let _videos = [], _channels = [];

  const youtube = google.youtube('v3');

  for (const q of queries) {
    searchQuery(youtube, q).then(items => {
      const videoIds = [], channelIds = [];

      items.map(el => {
        const { kind, videoId, channelId } = el.id;

        if (kind === 'youtube#video' && videoId) videoIds.push(videoId);
        if (kind === 'youtube#channel' && channelId) channelIds.push(channelIds);
      })

      const _videoIds = videoIds.join(',');
      const _channelIds = channelIds.join(',');

      videoData(youtube, _videoIds)
        .then(async objs => {
          _videos = objs;
          console.log('Successfully added all video information to the array.');

          const channelIds = [];
          await Promise.all(objs.map(async obj => {
            const isChannel = await Channel.findOne({ id: obj.id });
            if (isChannel) return;
            channelIds.push(obj.channelId);
          }));
          const _channelIds = channelIds.join(',');

          if (_channelIds === '') return;

          console.log(1);

          channelData(youtube, _channelIds)
            .then(objs => {
              _channels = objs;
              console.log('Successfully added all channel information to the array.');
            });
        });
    });
  }

  console.log(10);

  _videos.map(el => {
    const videoDoc = new Video(el);
    videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
  });

  _channels.map(el => {
    const channelDoc = new Channel(el);
    channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
  })
})();