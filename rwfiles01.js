'use strict';

var fs = require('fs');
var currentTime = new Date();

// syncronous read/write
var readMe = fs.readFileSync('readMe.txt', 'utf8');
readMe += currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

fs.writeFileSync('writeMe.txt', readMe);


// async read/write
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, function(err){
        if (err) {
            throw err;
        }
        console.log('file saved!');
    });
});

console.log('this will run before the asynch read/write');