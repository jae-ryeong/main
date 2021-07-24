const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
const VideoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  thumbnail: {
    type: String
  },
  publishTime: {
    type: String,
    requierd: true
  },
  live: {
    type: String
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Video', VideoSchema);