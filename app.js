'use strict';

var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.send('this is the contact page');
});

app.get('/profile/:id', function(req, res){
    res.send('you requested to see the profile with id: ' + req.params.id);
});

app.get('/api/allprofiles/', function(req, res){
    res.send('this will be the json profile data');
});

console.log('listenting on port 3000');
app.listen(3000);
