const { validationResult } = require('express-validator');
const wooClient = require('../config/woocommerce');

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

exports.getUsers = async (req, res) =>
    wooClient.getCustomers(req.query).then((result) => res.send(result.data)).catch((error) => res.status(422).json(error))
