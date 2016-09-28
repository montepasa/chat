var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

});

io.on('connection', function(socket){

    io.emit('ibrahim');
});

http.listen(process.env.PORT || 1337, function(){
  console.log('listening on *:3000');
});
