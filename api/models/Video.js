const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
module.exports = mongoose.model('Video', new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
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