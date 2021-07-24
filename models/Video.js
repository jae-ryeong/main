const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
const VideoSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
    unique: true
  },
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
  liveBroadcastContent: {
    type: String
  },
  publishTime: {
    type: String
  }
});

module.exports = mongoose.model('Video', VideoSchema);