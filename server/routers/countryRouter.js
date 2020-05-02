const { Router } = require('express')
const router = new Router()
const countryService = require('./../services/countryService')

router.get('/', async(req, res) => {
    const countries = await countryService.findAll()
    res.json(countries)
})

module.exports = router