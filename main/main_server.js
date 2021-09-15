const https = require('https')
const express = require('express')
const app = express()
const fs = require('fs')
const db = require('./db_connection')
global.dummy = ''

// const serverOption = {
//     key: fs.readFileSync('/usr/mohaemookji/private.key'),
//     cert: fs.readFileSync('/usr/mohaemookji/certificate.crt'),
// }

const serverOption = {
    key: fs.readFileSync('D:/mh-certi/private.key'),
    cert: fs.readFileSync('D:/mh-certi/certificate.crt'),
}

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
        db.add_data()
        res.send('add_data!!!', )
    })

    app.get('/find_all_data', (req, res) => {
        var dummy = db.find_data()
        res.send(`find_all_data = ${dummy}`)
    })

    app.get('/delete_data', (req, res) => {
        db.delete_all()
        res.send('delete_all!!!')
    })

    app.get('/random_select', (req, res) => {
        db.random_select()
        res.send('random_select!!!')
    })
})
