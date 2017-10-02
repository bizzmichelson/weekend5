var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// var saleModel = mongoose.model('saleModel', saleSchema);

var salesSchema = new Schema({
    cost: Number,
    sqft: Number,
    city: String
});

var Sales = mongoose.model('Sales', salesSchema, 'listings' );

module.exports = Sales;