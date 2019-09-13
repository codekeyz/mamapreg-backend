var express = require('express');
var router = express.Router();
var wooClient = require('../config/woocommerce');

// Home page route.
router.get('/', function (req, res) {
    wooClient.get('products', {}).then((result) => res.json(result.data)).catch((err) => console.log(err));
})

module.exports = router;
