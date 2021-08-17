<<<<<<< HEAD
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
    link : {type : String},
});

// defined Schema compile
const Noodle_Model = mongoose.model('noodle', Data_Schema);

// find all data
exports.find = () => {
    Noodle_Model.find((err, datas) => {
    console.log('Read all');
    
    if (err) { console.log(err); }
    else { console.log(datas);}
=======
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', () => { console.log('Database Connection failed')})

db.once('open', () => { console.log('Database Connected!')})

const Data_Schema = new mongoose.Schema({
    title : {type : String, required: true},
    thumbnail : {type : String, required: true},
    link : {type : String, required: true},
})

const Noodle_Model = mongoose.model('noodle', Data_Schema)

// search data
find = () => {
    Noodle_Model.find((err, datas) => {
    console.log('Read all')
    
    if (err) { throw err }
    else { for (var i=0;i<datas.length; i++) {
        console.log(datas[i].title, i, '번째')}
        }
>>>>>>> 2cadaa146b56baa7b57e5fc00659fd70d53629b8
    });
}

// data insert
<<<<<<< HEAD
exports.create = (title_lnk, thumbnail_lnk, link_lnk) => {
    const add_link = new Noodle_Model({title: title_lnk, thumbnail: thumbnail_lnk, link: link_lnk});
    add_link.save();
}

exports.random_select = (no) => {
    console.log(no);
}

// data remove all
exports.delete_all = () => {
    console.log("delete!!");
    Noodle_Model.deleteMany({}, (err) => {
        if (err) {console.log(err);}
        else {console.log('delete success');}
    });
}
=======
create = (title_lnk, thumbnail_lnk, link_lnk) => {
    const add_link = new Noodle_Model({title: title_lnk, thumbnail: thumbnail_lnk, link: link_lnk})
    add_link.save()
}

// data remove all
delete_all = () => {
    console.log("delete!!")
    Noodle_Model.deleteMany({}, (err) => {
        if (err) { console.log(err) }
        else { console.log('delete success') }
    });
}

// data random select
random_select = () => {
    const DB_length = Noodle_Model.find((err,datas) => {
        if (err) { throw err }
        else {
            const duple = []
            for (var i=0; i<9; i++){
                const random_index = Math.floor(Math.random()*datas.length);
                if (duple.includes(random_index) == false){
                    console.log(i+1,'번 영상\n',
                        'title :', datas[random_index].title, 
                        '\nthumbnail :', datas[random_index].thumbnail, 
                        '\nlink :', datas[random_index].link,'\n')
                    duple.push(random_index)
                }
                else {
                    console.log('\nduple!!\n\n')
                    i--
                }
            }
            console.log(duple)
        }
    })

}

module.exports = {find, create, delete_all, random_select}
>>>>>>> 2cadaa146b56baa7b57e5fc00659fd70d53629b8
