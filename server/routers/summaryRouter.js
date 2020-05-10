const { Router } = require('express')
const router = new Router()
const summaryService = require('../services/summaryService')

router.get('/', async(req, res) => {

    try {
        const summary = await summaryService.getSummary()

        if (summary)
            res.json(summary)
        else
            res.sendStatus(404)

    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router