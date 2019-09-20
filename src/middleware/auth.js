const request = require('request');


const auth = async (req, res, next) => request.post({
    url: `${process.env.CONSUMER_WEBSITE}/wp-json/jwt-auth/v1/token/validate`,
    headers: {
        'Authorization': req.headers['authorization']
    }
}, function (error, response, body) {

    var message = 'An error occurred', statusCode = response.statusCode;

    if (error) message = error;

    if (body && JSON.parse(body)) {
        var payLoad = JSON.parse(body);
        statusCode = payLoad.data.status;
        message = payLoad.message;
    }

    if (statusCode !== 200) return res.status(statusCode).json({
        message: message
    });

    next();

});

module.exports = auth