require('dotenv').config();
const { google } = require('googleapis');

const service = google.youtube('v3');

optionParams = {
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  q: '김치찌개',
  maxResults: 3 // 검색 결과 수
}

service.search.list(optionParams).then(response => {

  const { data, result } = response;
  data.items.forEach((item) => {
    let url;
    
    let { publishedAt, channelId, title, description, thumbnails, channelTitle, liveBroadcastContent, publishTime } = item.snippet;

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
      `This is ${item.id.kind}` +
      '\nTitle: ' + title +
      '\nDescription: ' + description +
      '\nThumbnails: ' + thumbnails.default.url +
      '\nPublishTime: ' + publishTime + 
      '\nLiveBroadcastContent: ' + liveBroadcastContent +
      '\n' + url + '\n\n'
    );
  });
  
}).catch(err => console.log(err.message));