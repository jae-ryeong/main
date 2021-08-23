require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');

const { getQueries, searchQuery, videoData, channelData } = require('./apiController');
const Video = require('../models/Video');
const Channel = require('../models/Channel');

(async () => {
  const service = google.youtube('v3');

  const queries = getQueries();

  const _videos = [], _channels = [];

  await Promise.all(queries.map(q => {
    searchQuery(service, q).then(items => {
      items.map(el => {
        const { kind, videoId, channelId, playlistId } = el.id;

        if (kind === 'youtube#video'&& videoId) {
          videoData(service, videoId)
            .then(async obj => {
              _videos.push(obj);
              console.log(`Video's info was successfully added to the array.`);

              if (await Channel.find({ id: channelId })) {
                return console.log(`Already exists for this channel's info.`);
              }

              channelData(service, obj.channelId)
                .then(obj => {
                  _channels.push(obj);
                  console.log(`Channel's info was successfully added to the array.`);
                })
            });
        }
      })
    });
  })).catch(err => console.error(`Error:\n${err.message}`));

  _videos.map(el => {
    const videoDoc = new Video(el);
    videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));
  });

  _channels.map(el => {
    const channelDoc = new Channel(el);
    channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
  })
})();

// const getCooking = () => {
//   const cookingList = [[],
//                        [],
//                        [],
//                        [],
//                        [],
//                        [],
//                        []];
//   return cookingList[getDayOfWeek()];
// }

// const getDayOfWeek = () => {
//   const date = new Date(),
//         dayOfWeek = date.getDay();
        
//   return dayOfWeek;
// }