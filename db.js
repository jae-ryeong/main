// mongoose module init
const mongoose = require('mongoose');

// testDB setting & using testDB
mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', () => {
    console.log('Database Connection failed');
});

db.once('open', () => {
    console.log('Database Connected!');
});

// Schema create
const Data_Schema = new mongoose.Schema({
<<<<<<< HEAD
    title : {type : String, required: true},
    thumbnail : {type : String, required: true},
    link : {type : String, required: true},
=======
    title : {type : String},
    thumbnail : {type : String},
    link : {type : String},
>>>>>>> 7bed2618165b2c2e7b5386524f19c03c7fccae0e
});

// defined Schema compile
const Noodle_Model = mongoose.model('noodle', Data_Schema);

// find all data
exports.find = () => {
    Noodle_Model.find((err, datas) => {
    console.log('Read all');
    
    if (err) { console.log(err); }
    else { console.log(datas);}
    });
}

// data insert
exports.create = (title_lnk, thumbnail_lnk, link_lnk) => {
    const add_link = new Noodle_Model({title: title_lnk, thumbnail: thumbnail_lnk, link: link_lnk});
    add_link.save();
}

<<<<<<< HEAD
exports.random_select = () => {
    const Schema_Keys = []

    const get_random_video= (array) => {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    };

    const key = get_random_video();
=======
exports.random_select = (no) => {
    console.log(no);
>>>>>>> 7bed2618165b2c2e7b5386524f19c03c7fccae0e
}

// data remove all
exports.delete_all = () => {
    console.log("delete!!");
    Noodle_Model.deleteMany({}, (err) => {
        if (err) {console.log(err);}
        else {console.log('delete success');}
    });
}