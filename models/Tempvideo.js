const mongoose = require('mongoose');

const TempvideoSchema = new mongoose.Schema({
  title: { type: String },
  thumbnail: { type: String },
  link: { type: String, unique: true }
});

module.exports = mongoose.model('Tempvideo', TempvideoSchema);