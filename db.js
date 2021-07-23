// mongoose module init
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

///testDB setting & using testDB
mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', () => {
    console.log('Database Connection failed');
});

db.once('open', () => {
    console.log('Database Connected!');
});

// Schema create
const Structor = new Schema({
    'title' : String,
    'thumbnail' : String,
    'link' : String
});

// defined Schema compile
Structor.set('collection', 'noodle');
const Noodle = mongoose.model('noodle', Structor);

// find data
exports.find = () => {
    Noodle.find((error, datas) => {
    console.log('Read all');
    if (error) { console.log(error); }
    else { console.log(datas); }
    });
}