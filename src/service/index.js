require('dotenv').config()
const { google } = require('googleapis');

const db = require('../../db');
const options = require('../config/options');
const search = require('./search');
const videos = require('./videos');

const Video = require('../models/Video');

const init = async () => {

}

const youtube = google.youtube('v3');

const q = '';
const topicId = '';

search(youtube, q, topicId).then(items => {

  for (const item of items) {
    const id = item.id;
    const { kind, videoId, channelId, playlistId } = id;

    if (videoId) {
      videos(youtube, videoId).then(item => {
        const { id, snippet, statistics} = item;
        const url = `https://www.youtube.com/watch?v=${id}`;
        const { channelId, title, description, thumbnails } = snippet;
        const thumbnail = thumbnails.default.url;
        const { viewCount, likeCount, commentCount } = statistics;
        
        console.log({ title, thumbnail, url, channelId });

        const videoDoc = new Video({ title: title, thumbnail: thumbnail, url: url, channelId: channelId });
        videoDoc.save(err => err ? console.error(err.message) : console.log('Saved in DB.'));
      })
    }
  }
})