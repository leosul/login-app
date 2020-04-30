const mongoose = require('mongoose')
const connectionString = process.env.MONGODB_URI


const connect = () => {
    return mongoose.connect(connectionString, { useNewUrlParser: true })
}

module.exports = { connect, mongoose }