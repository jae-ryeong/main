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
    title : {type : String},
    thumbnail : {type : String},
    link : {type : String, unique: true},
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

// exports.read_one = (no) => {
//     const num = Noodle_Model.findOne({no});
//     console.log(num);
// }

// data remove all
exports.delete_all = () => {
    console.log("delete!!");
    Noodle_Model.deleteMany({}, (err) => {
        if (err) {console.log(err);}
        else {console.log('delete success');}
    });
}