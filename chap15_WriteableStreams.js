'use strict';

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/lorem.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/loremWrite.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
});