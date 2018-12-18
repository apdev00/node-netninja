'use strict';

var express = require('express');
var app = express();
var obj = {
    name: 'raekwon',
    city: 'New York'
};

app.get('/', function(req, res){
    res.send(obj);
});

app.listen(3000);