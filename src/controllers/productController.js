const wooClient = require('../config/woocommerce');

exports.getProducts = async (req, res) => wooClient.getProducts(req.query).then((result) => res.send(result.data)).catch((error) => res.status(422).send(error.response.data));