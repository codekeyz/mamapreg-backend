var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// create a user
router.post('/register', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    body('username').isLength({ min: 5 }),
    body('first_name').optional({ nullable: true }).isLength({ min: 5 }),
    body('last_name').optional({ nullable: true }).isLength({ min: 5 })
], userController.createUser);

// login a user
router.post('/login', [
    body('email').isEmail().normalizeEmail(),
    body('password')
], userController.loginUser);

// get user account
router.post('/me', auth, userController.getMyAccount);

module.exports = router;
