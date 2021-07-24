require('dotenv').config();
const { google } = require('googleapis');

const service = google.youtube('v3');

optionParams = {
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  q: '스프링 입문',
  maxResults: 3 // 검색 결과 수
}

service.search.list(optionParams, (err, response) => {
  const { items } = response.data;
  
  items.forEach(item => {
    let url;

    const { kind } = item.id;

    console.log(item);
    switch (kind) {
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

    /**
     * Control fields option.
     * 
     */
    console.log(item.snippet);
    const docs = new Model(item.snippet);
    docs.save(err => console.log(err.message));
  })
})