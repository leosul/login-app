const { Router } = require('express')
const router = new Router()
const authService = require('./../services/authService')

router.post('/signin', async(req, res) => {
    const { body: { provider, token } } = req

    try {
        const signedUser = await authService.signin(provider, token)
        res.status(200).json(signedUser)
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router