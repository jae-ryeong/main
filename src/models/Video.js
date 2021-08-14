const mongoose = require('mongoose');

/**
 * Video schema
 * Properties used: Title, Description, Thumbnail, PublishTime, isLive, URL ...
 * Properties to be added: viewCount, likeCount, commentCount
 */
const VideoSchema = mongoose.Schema({
  title: { type: String },
  thumbnail: { type: String },
  url: { type: String, unique: true },
  channelId: {type: String },
});

module.exports = mongoose.model('Video', VideoSchema);