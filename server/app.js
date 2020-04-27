const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const appRouter = require('./routers/appRouter')
const app = express()

app.use((_req, res, next) => {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', appRouter)

app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = app