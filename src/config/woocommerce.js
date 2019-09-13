const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const CUSTOMERS = 'customers', PRODUCTS = 'products', CATEGORIES = 'products/categories', ORDERS = 'orders';

// initialize woocommerce
const wooClient = new WooCommerceRestApi({
    url: process.env.CONSUMER_WEBSITE,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    version: 'wc/v3',
    queryStringAuth: true
});

exports.getProducts = async (options = {}) => await wooClient.get(PRODUCTS, options);


exports.getCategories = async (options = {}) => await wooClient.get(CATEGORIES, options);


exports.getOrders = async (options = {}) => await wooClient.get(ORDERS, options);


exports.getCustomers = async (options = {}) => await wooClient.get(CUSTOMERS, options);


exports.createCustomer = async (data = {}) => await wooClient.post(CUSTOMERS, data);