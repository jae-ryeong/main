const mongoose = require('mongoose');

/**
 * Channel schema
 * Properties used: Title, Description, Thumbnail, PublishTime, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
const PlaylistSchema = mongoose.Schema({
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
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Video', PlaylistSchema);