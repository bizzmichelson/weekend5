var mongoose = require('mongoose');

var rentModel = mongoose.model('listing', rentSchema);
var rentModel = mongoose.model('listing', saleSchema);


var rentSchema = new mongoose.Schema({
    sqft: Number,
    city: String,
    rent: Number
});

// module.exports = rentSchema;

var saleSchema = new mongoose.Schema({
    sqft: Number,
    city: String,
    cost: Number
});

module.exports = rentModel;
