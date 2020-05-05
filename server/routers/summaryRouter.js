const { Router } = require('express')
const router = new Router()
const summaryService = require('../services/summaryService')

router.get('/', async(req, res) => {
    const summary = await summaryService.getSummary()
    res.json(summary)
})

module.exports = router