const express = require('express')
const app = express()
const fs = require('fs')
const db = require('../(TEST)db/db')

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

        db.create(title_lnk, thumbnail_lnk, link_lnk);
        console.log(`add_data ${i}`)
    }
})

app.get('/delete_data', (req, res) => {
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
