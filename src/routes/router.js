const userRouter = require('./users');

module.exports = function (app) {
    app.use('/users', userRouter)
}