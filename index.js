require('dotenv').config()
const app = require('./server/app')
const { connect } = require('./server/database/connection')
const port = process.env.PORT

app.listen(port || 3000, async() => {
    console.log(`API - Listening on port ${port}`)
    await connect()
    console.log(`Connected to MongoDB`)
})