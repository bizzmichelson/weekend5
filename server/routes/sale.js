var saleModel = require('../models/saleModel');
var router = require('express').Router();
var mongoose = require('mongoose');
// var saleSchema = require('../models/rentModel');


// var saleModel = mongoose.model('listing', saleSchema);

router.get('/', function(req, res){
    console.log('/sale gotten');
    saleModel.find({cost:{$exists:true}}).then(function(data) {
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.sendStatus(404);
    })
});

module.exports = router;