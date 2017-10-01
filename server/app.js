var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/realestate');

mongoose.connection.on('connected', function () {
    console.log('connected to mongo');
})

app.use(bodyParser.json());
var properties = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));


app.use('/properties', properties);



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3003, function() {
    console.log('on 3003');
});