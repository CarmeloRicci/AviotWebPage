// var http = require('http');
// var fs = require('fs');

// // Loading the index file . html displayed to the client
// var server = http.createServer(function(req, res) {
//     fs.readFile('./index.html', 'utf-8', function(error, content) {
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.end(content);
//     });
// });

// // Loading socket.io
// var io = require('socket.io').listen(server);

// // When a client connects, we note it in the console
// io.sockets.on('connection', function (socket) {
//     console.log('A client is connected!');
// });


// server.listen(5000);

var express = require('express')
var app = express()
var server = require("http").Server(app)
var io = require("socket.io")(server)

io.sockets.on('connection', function(socket, username) {

    console.log("Nuovo utente connesso")

    socket.on('Risposta1', function(Codice_Random) {
        
                socket.emit("Mesasggio_di_Benvenuto", "Ciao sei nel sito di gestione di Aviot");

})



server.listen(5000)