var io = require('socket.io').listen(process.env.PORT);
 
io.sockets.on('connection', function (socket) {
  socket.on('message', function (message) {
    socket.emit('message', message);
  });  
});
