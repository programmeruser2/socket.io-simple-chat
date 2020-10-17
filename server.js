const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req,res) {
  res.sendFile(__dirname+'/client.html');
});
io.on('connection', function(socket) {
  socket.on('message', function(data) {
    if(data) {
      io.emit('message','Message: '+data);
    }
   });
});

http.listen(3000);
