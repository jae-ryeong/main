const mongoose = require('mongoose')

// 데이터 베이스 연결
mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://localhost:27017/mohaemookji', { useNewUrlParser: true })

// 이벤트 이미터 생성
const db = mongoose.connection

// 에러, 연결 시 처리
db.on('error', err => console.error(`Error on connection:\n${err.message}`));
db.once('open', () => console.log('Database connected.'));

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
    });
}

// data insert
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

module.exports = {db, find, create, delete_all, random_select}
