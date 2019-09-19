const userRouter = require('./users'), productRouter = require('./products');

module.exports = function (app) {
    app.use('/users', userRouter)
    app.use('/products', productRouter)
}