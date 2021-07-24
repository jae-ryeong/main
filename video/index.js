require('dotenv').config();
const { google } = require('googleapis');

const service = google.youtube('v3');

const optionParams = {
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet, statistics',
  id: 't-0WD34AytM',
  fields: 'items(id, snippet(title, description, channelId), statistics(viewCount, likeCount, commentCount))'
}

service.videos.list(optionParams).then(response => {  

  const video = response.data.items;

  console.log(video);
  
  if (video.length == 0) {
    console.log('There is no video.');
  } else {
    console.log(JSON.stringify(video[0], null, 4));
  }

}).catch(err => console.log(err.message));