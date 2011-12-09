var io = require('socket.io').listen(80);
io.configure('production', function () {
    io.set('log level', 1);
});
io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
        socket.send(data);
    });
});