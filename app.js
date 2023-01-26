const fs = require('fs')
const express = require('express')
const socket = require('socket.io')
const hostname ='localhost'
const port = 5000
const http = require('http')
const app = express()
const server = http.createServer(app).listen(port)
const io = socket(server)

app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))

app.get('/', function(request, response) {
    fs.readFile('./static/login.html', function(err, data){
        if(err) {
            response.send('error')
        } else {
          response.writeHead(200, {'Content-Type':'text/html'})
          response.write(data)
          response.end()
        }
    })
})

app.post('/chat', function(request, response) {
  fs.readFile('./static/chat.html', function(err, data){
      if(err) {
          response.send('error')
      } else {
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write(data)
        response.end()
      }
  })
})