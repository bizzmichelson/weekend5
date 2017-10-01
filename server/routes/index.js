var router = require('express').Router();

var rental = require('./rental');
var sale = require('./sale');

router.use('/rental', rental);
router.use('/sale', sale);



module.exports = router;