const { validationResult } = require('express-validator');
const wooClient = require('../config/woocommerce');
const request = require('request');

exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() });

    return wooClient.createCustomer(req.body).then((result) => res.send(result.data)).catch((error) => res.status(422).send(error.response.data));
};

exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() });
}

exports.getMyAccount = async (req, res) => request.post({
    url: `${process.env.CONSUMER_WEBSITE}/wp-json/wp/v2/users/me`,
    headers: {
        'Authorization': req.headers['authorization']
    }
}, function (error, response, body) {

    if (error) return res.status(response.statusCode).json({
        message: error,
    });

    res.set('Content-Type', 'application/json; charset=UTF-8').send(body);

});