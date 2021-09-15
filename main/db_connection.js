const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/mohaemookji', { useNewUrlParser: true })
const db = mongoose.connection

db.on('error', err => console.error(`Error on connection:\n${err.message}`));
db.once('open', () => console.log('Database connected.'));

const Data_Schema = new mongoose.Schema({
    title : {type : String, required: true},
    thumbnail : {type : String, required: true},
    link : {type : String, required: true},
})

const Noodle_Model = mongoose.model('noodle', Data_Schema)

add_data = () => {
    for (var i=0; i<8; i++){
        const title_lnk = Math.random().toString(36).slice(2)
        const thumbnail_lnk = Math.random().toString(36).slice(2)
        const link_lnk = Math.random().toString(36).slice(2)
        const add_link = new Noodle_Model({title: title_lnk, thumbnail: thumbnail_lnk, link: link_lnk})
        add_link.save()
        console.log(`add_data ${i}`)
    }
}

find_data = () => {
    var param = ''
    Noodle_Model.find((err, datas) => {
        if (err) throw err
        else {
            var dummy = datas.map(x => ({title : x.title, thumbnail : x.thumbnail, link: x.link}))
            param = JSON.stringify(dummy)
        }
    });
    console.log(param)
    return param
}

delete_all = () => {
    console.log("delete_all!!")
    Noodle_Model.deleteMany({}, (err) => { if (err) throw err });
}

random_select = () => {
    const DB_length = Noodle_Model.find((err,datas) => {
        if (err) throw err
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

module.exports = {db, add_data, find_data, delete_all, random_select}
