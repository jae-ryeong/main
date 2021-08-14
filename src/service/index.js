require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');
const options = require('../config/options');
const search = require('./search');
const videos = require('./videos');

const init = async () => {

}

const youtube = google.youtube('v3');

search(youtube).then(items => {

  for (const item of items) {
    const { id } = item;
    const { kind, videoId } = id;

    if (videoId) {
      videos(youtube, videoId).then(items => {

      })
    }
  }
})