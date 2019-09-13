const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

// initialize woocommerce
const api = new WooCommerceRestApi({
    url: process.env.CONSUMER_WEBSITE,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: 'wc/v3',
    queryStringAuth: true
});

module.exports = api;