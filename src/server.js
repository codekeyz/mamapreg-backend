// initialize express
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setup routes
router(app)

module.exports = app;