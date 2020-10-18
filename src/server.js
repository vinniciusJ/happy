const express = require('express')
const path = require('path')

const pages = require('./pages.js')

const server = express()

// Uses

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Sets

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

// Routes

server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

server.post('/save-orphanage', pages.saveOrphanage)
// Listener

server.listen(3333)