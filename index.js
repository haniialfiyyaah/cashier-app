const express = require('express')
const session = require('express-session')
const router = require('./routers')
const app = express()
const port = 3000
app.use(session({
    secret: 'hacktivpairproject-cashier',
    resave: false,
    saveUninitialized: true
  }))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(router)

app.listen(port, () => {
    console.log('Running on',port);
})