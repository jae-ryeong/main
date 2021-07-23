const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db');

app.use(express.static('Front'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    fs.readFile('./Front/html/main.html', (err, data)=>{
    if (err) throw err;
    res.end(data,'utf-8');
    });
});

app.get('/VideoList.html', (req, res) => {
    fs.readFile('./Front/html/VideoList.html', (err, data)=>{
    if (err) throw err;
    res.end(data,'utf-8');
    });
});

app.get('/find_all_data', (req, res) => {
    console.log('DB : ',db);
    db.find();
});

app.get('/add_data', (req, res) => {
    for (var i=0; i<8; i++){
        const title_lnk = Math.random().toString(36).slice(2);
        const thumbnail_lnk = Math.random().toString(36).slice(2);
        const link_lnk = Math.random().toString(36).slice(2);

        db.create(title_lnk, thumbnail_lnk, link_lnk);
        console.log(`add_data ${i}`);
    }
});

app.get('/delete_data', (req, res) => {
    console.log("remove");
    db.delete_all();
});

// app.get('/read_one', (req, res) => {
//     console.log("read_one");
//     db.read_one(0);
// });

app.listen(8000, () => {
    console.log(`Server Running`);
});