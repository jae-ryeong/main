const { videos: options } = require('../config/options');
const Video = require('../models/Video');

module.exports = async (youtube, videoId) => {
  try {
    options.id = videoId;
    const response = await youtube.videos.list(options);
    const { items } = response.data;

    if (items == null || items.length === 0) return console.log('Not found.');

    return items;
  } catch (err) {
    console.error('Error in videos:\n', err.message);
  }
}