const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
 module.exports = mongoose.model('Breakfast', new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  channelId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
}));