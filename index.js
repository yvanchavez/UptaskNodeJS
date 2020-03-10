const express = require('express')
const routes = require('./routes')
const path = require('path')

//crear una app de express
app = express()
//Habilitar Pug
app.set('view engine','pug')

//Agregar la carpeta de las vistas
app.set('views',path.join(__dirname, './views'))

app.use('/', routes())

app.listen(3000)

