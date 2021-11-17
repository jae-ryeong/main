const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 17260;

// edit : mongoose connect and error check
mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://db:27017/mohaemookji', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', err => console.error(`Error on connection:\n${err.message}`));
db.once('open', () => console.log('Database connected.'));

// edit : mongoose schema and model define 
const Data_Schema = new mongoose.Schema({
    title : {type : String, required: true},
    thumbnail : {type : String, required: true},
    link : {type : String, required: true},
});
const Noodle_Model = mongoose.model('noodle', Data_Schema);

// SSL authentication
const serverOption = {
    key: fs.readFileSync(path.join(__dirname, '/usr/local/mohaemookji/mh-ssl/private.key')),
    cert: fs.readFileSync(path.join(__dirname, '/usr/local/mohaemookji/mh-ssl/certificate.crt')),
}

// server on
https.createServer(serverOption, app).listen(port, () => {
    console.log(`Server Running at ${port}`);

    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, './mh-frontend/dist')));

    // main page response
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './mh-frontend/dist/index.html'));
    });

    // find all data in mongoose 
    app.get('/find_all_data', (req, res) => {
        try {
            let dummy = Noodle_Model.find((err, datas) => {
                if (err) throw err;
                else {
                    let param = datas.map(x => ({title : x.title, thumbnail : x.thumbnail, link: x.link}));
                    res.send(`find_all_data = ${JSON.stringify(param)}`);
                }
            });
        } catch (error) {
            res.send('do not find data!!!');
        }
    });

    // delete all data on DB
    app.get('/delete_data', (req, res) => {
        Noodle_Model.deleteMany({}, (err) => { if (err) throw err });
        res.send('delete_all!!!!!');
    });

    // random select data on DB
    app.get('/random_select', (req, res) => {
        try {
            const duple = [];
            const DB_length = Noodle_Model.find((err,datas) => {
                if (err) throw err;
                else {
                    for (var i=0; i<9; i++){
                        const random_index = Math.floor(Math.random()*datas.length);
                        if (duple.includes(random_index) == false){
                            console.log(i+1,'번 영상\n',
                                'title :', datas[random_index].title, 
                                '\nthumbnail :', datas[random_index].thumbnail, 
                                '\nlink :', datas[random_index].link,'\n');
                            duple.push(random_index);
                        }
                        else {
                            console.log(`\nduple!! ${i}\n\n`);
                            duple.pop();
                            i--;
                        }
                    }
                }
                console.log(duple);
                res.send(`random_select!!! ${JSON.stringify(duple)}`);
            });
        } catch (error) {
            res.send('do not find random data!!!');
        }
    });
});