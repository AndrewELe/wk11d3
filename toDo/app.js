const express = require('express')
const morgan = require('morgan')
const toDoRoutes = require('./routes/toDoRoutes')
const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/', toDoRoutes)

module.exports = app