var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

// get products;
router.get('/', productController.getProducts);

module.exports = router;
