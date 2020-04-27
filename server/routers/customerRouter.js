const { Router } = require('express')
const router = new Router()
const customerService = require('./../services/customerService')

router.get('/', async(req, res) => {
    const { userId, query } = req
    const customers = await customerService.findAll(userId, query.page)
    res.json(customers)
})

router.get('/:id', async(req, res) => {
    const { params: { id }, userId } = req

    try {
        const customer = await customerService.findById(id, userId)

        if (customer) {
            res.json(customer)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/', async(req, res) => {
    const { body, userId } = req
    body.userId = userId

    try {
        const customer = await customerService.insert(body)
        res.status(201).json(customer)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    const { body, params: { id }, userId } = req
    body.userId = userId

    try {
        const customer = await customerService.update(id, body)
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    const { params: { id }, userId } = req

    try {
        await customerService.remove(id, userId)
        res.sendStatus(204)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router