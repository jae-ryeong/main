const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const db = require('./db');

app.use(express.static('Front'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    fs.readFile('./Front/html/main.html', (err, data)=>{
    if (err) throw err;
    res.end(data,'utf-8');
    });
});

app.get('/VideoList.html', function(req, res){
    console.log('DB : ',db);
    db.find();
});

app.listen(8000, function(){
    console.log(`Server Running`);
});