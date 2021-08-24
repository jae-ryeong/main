require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');

const { channelData, searchQuery, videoData } = require('./apiController');
const Video = require('../models/Video');
const Channel = require('../models/Channel');

(async () => {
  // const queries = getQueries();
  const queries = ['떡볶이'],
        queries_len = queries.length;

  let _videos = [], _channels = [];

  const youtube = google.youtube('v3');

  for (let i=0; i<queries_len; i+=1) {
    await searchQuery(youtube, queries[i])
            .then(async items => {
              const videoIds = [],
                    channelIds = [];

              for (const item of items) {
                const { kind, videoId, channelId } = item.id;
                if (kind === 'youtube#video' && videoId) videoIds.push(videoId);
                if (kind === 'youtube#channel' && channelId) channelIds.push(channelId);
              }

              const _videoIds = videoIds.join(','),
                    _channelIds = channelIds.join(',');
              console.log(`videoIds: ${_videoIds}`);
              
              await videoData(youtube, _videoIds)
                      .then(async objs => {
                        _videos = objs;
                        console.log('Successfully added all video information to the array.');

                        const channelIds = await Promise.all(objs.map(obj => obj.channelId)
                                                                 .filter(async id => {
                                                                   const isChannel = await Channel.findOne({ id: id });
                                                                   return isChannel ? false : true;
                                                                 }));
                        const _channelIds = channelIds.join(',');
                        console.log(`channelIds: ${_channelIds}`);

                        if (_channelIds === '') return;

                        await channelData(youtube, _channelIds)
                                .then(objs => {
                                  _channels = objs;
                                  console.log('Successfully added all channel information to the array.');
                                });


                      });

            });
  }

  _videos.map(el => {
    const videoDoc = new Video(el);
    videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
  });

  _channels.map(el => {
    const channelDoc = new Channel(el);
    channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
  })
})();