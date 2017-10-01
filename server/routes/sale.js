var router = require('express').Router();
var saleSchema = require('../models/saleModel');
var mongoose = require('mongoose');
var router = require('express').Router();
var saleSchema = require('../models/rentModel');


// var rentModel = mongoose.model('listing', saleSchema);

router.get('/', function(req, res){
    console.log('/sale gotten');
    rentModel.find({cost:{$exists:true}}).then(function(data) {
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.sendStatus(404);
    })
});

module.exports = router;