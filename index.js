const express = require('express')
app = express()

//ruta para el home
app.use('/',(req,res)=>{
    res.send("hola")
})

app.listen(3000)

