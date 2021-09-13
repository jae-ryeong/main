const mongoose = require('mongoose');

module.exports = mongoose.model('Wellbeing', new mongoose.Schema({
  query: {
    type: String,
    required: true,
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