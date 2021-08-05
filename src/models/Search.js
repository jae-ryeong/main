const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  title: { type: String },
  thumbnail: { type: String },
  url: { type: String, unique: true }
});

module.exports = mongoose.model('Search', SearchSchema);