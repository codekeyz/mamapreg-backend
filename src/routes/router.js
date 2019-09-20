const userRouter = require('./users'), productRouter = require('./products'), categoryRouter = require('./categories');

module.exports = function (app) {
    app.use('/users', userRouter)
    app.use('/products', productRouter)
    app.use('/categorys', categoryRouter)
}  