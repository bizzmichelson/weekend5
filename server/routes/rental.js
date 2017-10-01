var router = require('express').Router();
var rentSchema = require('../models/rentModel');
var mongoose = require('mongoose');



router.get('/', function(req, res){
    console.log('/rent gotten');
    rentModel.find({rent:{$exists:true}}).then(function(data) {
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.sendStatus(404);
    })
});

module.exports = router;
