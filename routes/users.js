var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/', usersController.getUsers);

router.post('/', usersController.postUser);

router.delete('/', usersController.deleteUser);

module.exports = router;
