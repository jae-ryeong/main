require('dotenv').config();
const { google } = require('googleapis');
const youtube = google.youtube('v3');

const search = async () => {
  const options = {
    key: process.env.YOUTUBE_TOKEN,
    q: '스프링 입문',
    maxResults: 1,
    fields: 'items(id)',
  }

  youtube.search.list(options, (err, res) => {
    const { items } = res.data;

    for (item of items) {
      handleItem(item);
    }
  });
}

const handleItem = async item => {
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
}


youtube.search.list(options, (err, response) => {
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