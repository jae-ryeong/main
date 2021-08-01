require('dotenv').config();
const { google } = require('googleapis');

const optionParams = {
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  q: '스프링 입문',
  maxResults: 2,
  fields: 'items(id)',
}

google.youtube('v3').search.list(optionParams, (err, response) => {
  const { items } = response.data;

  for (item of items) {
    console.log(item.id);
  }
})