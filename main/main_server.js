const https = require('https')
const express = require('express')
const app = express()
const fs = require('fs')
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

// [edit] for linux
const serverOption = {
    key: fs.readFileSync('/usr/mohaemookji/private.key'),
    cert: fs.readFileSync('/usr/mohaemookji/certificate.crt'),
}

// [edit] for windows
// const serverOption = {
//     key: fs.readFileSync('D:/mh-certi/private.key'),
//     cert: fs.readFileSync('D:/mh-certi/certificate.crt'),
// }

https.createServer(serverOption ,app).listen(17260, () => {
    console.log(`Server Running`)
    app.use(express.static('Pages'))

    app.get('/', (req, res) => {
        fs.readFile('./Pages/html/main.html', (err, data)=>{
        if (err) throw err
        res.end(data,'utf-8')
        })
    })

    app.get('/VideoList.html', (req, res) => {
        fs.readFile('./Pages/html/VideoList.html', (err, data)=>{
        if (err) throw err
        res.end(data,'utf-8')
        })
    })

    app.get('/add_data', (req, res) => {
        for (var i=0; i<8; i++){
            const title_lnk = Math.random().toString(36).slice(2)
            const thumbnail_lnk = Math.random().toString(36).slice(2)
            const link_lnk = Math.random().toString(36).slice(2)
            const add_link = new Noodle_Model({title: title_lnk, thumbnail: thumbnail_lnk, link: link_lnk})
            add_link.save()
            console.log(`add_data ${i}`)
        }
        res.send('add_data!!!')
    })

    app.get('/find_all_data', (req, res) => {
        let dummy = Noodle_Model.find((err, datas) => {
            if (err) throw err
            else {
                let param = datas.map(x => ({title : x.title, thumbnail : x.thumbnail, link: x.link}))
                res.send(`find_all_data = ${JSON.stringify(param)}`)
            }
        })
    })

    app.get('/delete_data', (req, res) => {
        Noodle_Model.deleteMany({}, (err) => { if (err) throw err });
        res.send('delete_all!!!')
    })

    app.get('/random_select', (req, res) => {
        const duple = []
        const DB_length = Noodle_Model.find((err,datas) => {
            if (err) throw err
            else {
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
                        if (i<0) break
                    }
                }
            }
            console.log(duple)
            res.send(`random_select!!! ${JSON.stringify(duple)}`)
        })
    })
})
