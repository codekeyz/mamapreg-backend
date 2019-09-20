var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');

// create a user
router.post('/register', [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 5 }),
    body('username').isLength({ min: 5 }),
    body('first_name').optional().isLength({ min: 5 }),
    body('last_name').optional().isLength({ min: 5 })
], userController.createUser);

// login a user
router.post('/login', [
    body('email').isEmail().normalizeEmail(),
    body('password')
], userController.loginUser);

// get users;
router.get('/', userController.getUsers);

module.exports = router;
