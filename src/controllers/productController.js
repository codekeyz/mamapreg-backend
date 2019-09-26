const wooClient = require('../config/woocommerce');

exports.getProducts = async (req, res) => wooClient.getProducts(req.query).then((result) => res.send(result.data)).catch((error) => res.status(422).send(error.response.data));

exports.getProduct = async (req, res) => {
    var productId = req.params.productId;


    if (!parseInt(productId)) return res.status(422).json({
        message: 'Product Id must be a number',
        status: 422
    });


    try {

        const result = await wooClient.getProduct(productId);

        const reviews = await wooClient.getReviews(
            { product: `${productId}` }
        );

        result.data['reviews'] = reviews.data;
        res.send(result.data);

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}