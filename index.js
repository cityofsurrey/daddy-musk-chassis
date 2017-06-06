var room = 'abc123'

socket.on('connect', function() {
  socket.emit('room', room)
  socket.emit('initiate')
})

socket.on('message', function(msg){
  console.log(msg)
})
