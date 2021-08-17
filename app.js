<<<<<<< HEAD
const express = require('express');
const app = express();
const fs = require('fs');
const db = require('./db');
=======
const express = require('express')
const app = express()
const fs = require('fs')
const db = require('./db')
>>>>>>> 2cadaa146b56baa7b57e5fc00659fd70d53629b8

app.use(express.static('Front'));
app.get('/', (req, res) => {
    fs.readFile('./Front/html/main.html', (err, data)=>{
<<<<<<< HEAD
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
    console.log('delete');
    db.delete_all();
});

app.get('/find_all_data', (req, res) => {
    console.log(`DB : ${db}`);
    db.find();
});

app.get('/random_select', (req, res) => {
    console.log('random_select');
    db.random_select(0);
});

app.listen(8000, () => {
    console.log(`Server Running`);
});
=======
    if (err) throw err
    res.end(data,'utf-8')
    })
})

app.get('/VideoList.html', (req, res) => {
    fs.readFile('./Front/html/VideoList.html', (err, data)=>{
    if (err) throw err
    res.end(data,'utf-8')
    })
})

app.get('/add_data', (req, res) => {
    for (var i=0; i<8; i++){
        const title_lnk = Math.random().toString(36).slice(2)
        const thumbnail_lnk = Math.random().toString(36).slice(2)
        const link_lnk = Math.random().toString(36).slice(2)

        db.create(title_lnk, thumbnail_lnk, link_lnk);
        console.log(`add_data ${i}`)
    }
})

app.get('/delete_data', (req, res) => {
    console.log('delete')
    db.delete_all()
})

app.get('/find_all_data', (req, res) => {
    db.find()
})

app.get('/random_select', (req, res) => {
    db.random_select()
})

app.listen(8000, () => {
    console.log(`Server Running`)
})
>>>>>>> 2cadaa146b56baa7b57e5fc00659fd70d53629b8
