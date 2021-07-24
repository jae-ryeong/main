require('dotenv').config();
const { google } = require('googleapis');

const db = require('../db');
// const Video = require('../models/Video');
const Video = require('../models/Tempvideo');

const service = google.youtube('v3');

// const optionParams = {
//   key: process.env.YOUTUBE_TOKEN,
//   part: 'snippet, statistics',
//   id: 't-0WD34AytM',
//   fields: 'items(id, snippet(title, description, channelId), statistics(viewCount, likeCount, commentCount))'
// }

// service.videos.list(optionParams, (err, response) => {
//   const { snippet, statistics } = response.data.items[0];

//   console.log(snippet, statistics);
  
//   // Video.create(snippet);
// })

optionParams = {
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  q: '스프링 입문',
  maxResults: 10 // 검색 결과 수
}

service.search.list(optionParams, (err, response) => {
  const { items } = response.data;
  
  items.forEach(item => {
    const { title, thumbnails } = item.snippet;
    let url;

    switch (item.id.kind) {
      case 'youtube#playlist':
        url = 'https://www.youtube.com/playlist?list=' + item.id.playlistId;
        break;
      case 'youtube#channel':
        url = 'https://www.youtube.com/channel/' + item.id.channelId;
        break;
      case 'youtube#video':
        url = 'https://www.youtube.com/watch?v=' + item.id.videoId;
        break;
    }

    console.log(
      "title: " + title +
      "\nthumbnail: " + thumbnails.default.url +
      "\nlink: " + url + "\n\n"
    );

    const temp_video = new Video({ title: title, thumbnail: thumbnails.default.url, link: url })
    temp_video.save(err => console.log(err.message));
  })
})