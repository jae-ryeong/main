const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
module.exports = mongoose.model('Videos', new mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  url: {
    type: String,
    unique: true
  },
  channelId: {
    type: String,
  },
}));