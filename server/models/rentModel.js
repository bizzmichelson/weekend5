var mongoose = require('mongoose');

// var rentModel = mongoose.model('rentModel', rentSchema);
var rentModel = mongoose.model('rentModel', rentSchema, 'listings');


var rentSchema = new mongoose.Schema({
    sqft: Number,
    city: String,
    rent: Number
});

module.exports = rentSchema;

