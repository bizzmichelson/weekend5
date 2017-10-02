var Rent = require('../models/rentModel');
var router = require('express').Router();
// var mongoose = require('mongoose');


router.get('/', function(req, res){
    console.log('/rent gotten');
    Rent.find({rent:{$exists:true}}).then(function(data) {
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.sendStatus(404);
    })
});

module.exports = router;
