const { Router } = require('express')
const authenticator = require('./../middlewares/authenticator')
const customerRouter = require('./customerRouter')
const countryRouter = require('./countryRouter')
const authRouter = require('./authRouter')
const router = new Router()

router.get('/', (_req, res) => {
    res.send('LoginApp API')
})

router.use('/customers', authenticator, customerRouter)
router.use('/auth', authRouter)
router.use('/countries', countryRouter)
router.use('/countries/:country', countryRouter)

module.exports = router