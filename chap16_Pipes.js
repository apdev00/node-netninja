'use strict';

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/loremWrite.txt');

//myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');