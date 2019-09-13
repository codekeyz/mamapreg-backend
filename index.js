// load variables into process.env
require('dotenv').config()
const port = process.env.PORT

const server = require('./src/server');

// start server
server.listen(port, () => console.log(`App listening on port ${port}!`))