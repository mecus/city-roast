const express = require('express')
const _http = require('http')
const bodyParser = require('body-parser')

const pay = require('./api/payment')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/home', function (req, res) {
  res.send('hello world of express in the home page')
})
app.use('/api', pay)

_http.createServer(app).listen(3000, ()=>{
    console.log('server running on port 3000...');
});