const Video = require('../models/Video');

module.exports = (youtube, options) => {

  youtube.videos.list(options, (err, response) => {
    if (err) {
      return console.error('Error in videos api:\n', err.message);
    }

    const { items } = response.data;

    if (items == null || items.length === 0) {
      return console.log('Not found.')
    }

    return items;
  });
}