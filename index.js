const express = require('express')
const routes = require('./routes')

//crear una app de express
app = express()

app.use('/', routes())

app.listen(3000)

