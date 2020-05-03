const { Router } = require('express')
const router = new Router()
const countryService = require('./../services/countryService')

router.get('/', async(req, res) => {
    const countries = await countryService.findAll()
    res.json(countries)
})

router.get('/:country', async(req, res) => {
    const { params: { country } } = req

    try {
        const content = await countryService.findByCountry(country)

        if (content) {
            res.json(content)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router