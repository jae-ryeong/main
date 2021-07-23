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
    console.log('DB : ',db);
    db.find();
});

app.get('/add_data', (req, res) => {
    const title_lnk = '김빵상의 레전드 요리';
    const thumbnail_lnk = 'https://i.ytimg.com/an_webp/JJ-MTRj_HDk/mqdefault_6s.webp?du=3000&sqp=CK2A6ocG&rs=AOn4CLAVO9PJ2eks0r90BvwLufHmxefkyQ';
    const link_lnk = 'https://www.youtube.com/watch?v=JJ-MTRj_HDk'

    db.create(title_lnk, thumbnail_lnk, link_lnk);
    console.log('add_data');
});

app.get('delete_data', (req, res) => {
    
})

app.listen(8000, () => {
    console.log(`Server Running`);
});