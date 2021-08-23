require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');

const { searchQuery, videoData, channelData } = require('./apiController');
const Video = require('../models/Video');
const Channel = require('../models/Channel');

(() => {
  const service = google.youtube('v3');

  const q = '라면요리';
  const topicId = '';

  searchQuery(service, q, topicId).then(items => {
    items.map(el => {
      const { kind, videoId, channelId, playlistId } = el.id;

      if (kind === 'youtube#video'&& videoId) {
        videoData(service, videoId)
          .then(async obj => {
            const videoDoc = new Video(obj);
            videoDoc.save(err => err ? console.error(err.message) : console.log(`Video's info saved in DB.`));

            if (await Channel.find({ id: channelId })) {
              return console.log(`Already exists for this channel's info.`);
            }
            
            channelData(service, obj.channelId)
              .then(obj => {
                const channelDoc = new Channel(obj);
                channelDoc.save(err => err ? console.error(err.message) : console.log(`Channel's info saved in DB.`));
              })
          });
      }
    })
  });
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