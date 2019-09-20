const wooClient = require('../config/woocommerce');

exports.getCategories = async (req, res) => wooClient.getCategories(req.query).then((result) => res.send(result.data)).catch((error) => res.status(422).send(error.response.data));