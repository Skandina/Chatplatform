const fs = require('fs')
const express = require('express')
const socket = require('socket.io')
const http = require('http')
const app = express()
const io = socket(server)

io.sockets.on('connection', function(socket){

  socket.on('newUser', function(name) {
    console.log(name + ' logged in')
    socket.name = name 
    po = name
    io.sockets.emit('update', {type: 'connect', name: 'SERVER', message: name + ' logged in'})
  })

  socket.on('message', function(data){
    data.name = socket.name
    console.log(data)
    socket.broadcast.emit('update', data)
  })
  
  socket.on('disconnect', function() {
    console.log(socket.name + ' logged out')
    socket.broadcast.emit('update', {type: 'disconnect', name:'SERVER', message: socket.name + '  logged out'})
  })
})
