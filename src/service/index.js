require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');
const search = require('./search');
const videos = require('./videos');
const options = require('../config/options');

const youtube = goolge.youtube('v3');


search(youtube, options.search).then(result => {
  videos(youtube, options.videos).then(result => {
    for (const item of result) {
      console.log(item);
    }
  })
})
