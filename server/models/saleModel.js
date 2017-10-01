var mongoose = require('mongoose');

// var saleModel = mongoose.model('saleModel', saleSchema);

var saleModel = mongoose.model('saleModel', saleSchema, 'listings');


var saleSchema = new mongoose.Schema({
    sqft: Number,
    city: String,
    cost: Number
});

module.exports = saleSchema;
