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
const request = require('request');

io.sockets.on('connection', function (socket) {

    console.log("Nuovo utente connesso")

    socket.on('Risposta1', function (Nome) {

        socket.emit("Mesasggio_di_Benvenuto", "Ciao " + Nome + " sei nel sito di gestione di Aviot");
        console.log("Mesasggio_di_Benvenuto", "Ciao " + Nome + " sei nel sito di gestione di Aviot");

    })

    socket.on("GetAllElements", function (message) {

        const options = {
            url: 'https://reqres.in/api/users',
            json: true,
            body: {
                name: 'John Doe',
                job: 'Content Writer'
            }
        };

        request.post(options, (err, res, body) => {
            if (err) {
                return console.log(err);
            }
            console.log(`Status: ${res.statusCode}`);
            socket.emit("AllElements", body);
            console.log("AllElements", body);
        });

        document.getElementById('Welcome').innerHTML = message;
    })

})

const pubApiFrontendRoute = require('./routes/frontendRoutes');
server.use('/frontend', pubApiFrontendRoute);

server.listen(5000)






