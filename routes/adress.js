var express = require('express');
var router = express.Router();
let adressController = require('../controllers/adressControllers')

/* GET users listing. */
router.get('/', adressController.getAdress);

module.exports = router;