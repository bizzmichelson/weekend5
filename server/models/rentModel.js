var mongoose = require('mongoose');


// var rentModel = mongoose.model('rentModel', rentSchema);


var rentSchema = new mongoose.Schema({
    sqft: Number,
    city: String,
    rent: Number
});


var Rent = mongoose.model('Rent', rentSchema, 'listings');


module.exports = Rent;

