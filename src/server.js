// initialize express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const productRouter = require('./routes/products'), categoryRouter = require('./routes/categories')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// define routes
app.use('/products', productRouter)
app.use('/categories', categoryRouter)

module.exports = app;