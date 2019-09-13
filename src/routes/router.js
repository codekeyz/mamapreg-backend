const productRouter = require('./products'), categoryRouter = require('./categories'), userRouter = require('./users'), orderRouter = require('./orders')

module.exports = function (app) {
    app.use('/products', productRouter)
    app.use('/categories', categoryRouter)
    app.use('/users', userRouter)
    app.use('/orders', orderRouter)
}