var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// create a user
router.post('/register', userController.createUser);

// login a user
router.post('/login', userController.loginUser);

// get user account
router.post('/me', auth, userController.getMyAccount);

module.exports = router;
