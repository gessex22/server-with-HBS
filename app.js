const express = require('express')
const hbs = require('hbs')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT


app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))


app.get('/', (req,resp)=>{

    resp.render('home', {

        nombre: 'Gessex22',
        titulo: 'Practica de node'

    })
})

app.get('/generic', (req,resp)=>{

    resp.render('generic', {

        nombre: 'Gessex22',
        titulo: 'Practica de node'

    })
})

app.get('/elements', (req,resp)=>{

    resp.render('elements', {

        nombre: 'Gessex22',
        titulo: 'Practica de node'

    })
})

app.get('*', (req,resp)=>{

    resp.sendFile(__dirname+ '/public/generic.html')
})

app.listen(port , ()=>{

    console.log('Server  Template online en el puerto ' + port)
})