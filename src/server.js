// initialize express
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const router = require('./routes/router')

const app = express()

// important configs
app.use(helmet())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setup routes
router(app)

module.exports = app;