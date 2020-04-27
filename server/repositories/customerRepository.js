const Customer = require('./../models/Customer')

const findAll = (userId, page) => {
    const options = {
        page,
        limit: 20,
        sort: { name: 1 },
        customLabels: { docs: 'customers' },
        select: { userId: 0, createdAt: 0, __v: 0 }
    }

    return Customer.paginate({ userId }, options)
}

const findById = (_id, userId) => {
    return Customer.findOne({ _id, userId })
        .select({ userId: 0, createdAt: 0, __v: 0 })
}

const insert = (customerData) => {
    const customer = new Customer({...customerData })
    return customer.save()
}

const update = async(id, customerData) => {
    const customer = await findById(id, customerData.userId)

    if (!customer) {
        throw new Error('not found')
    }

    Object.assign(customer, customerData)
    return customer.save()
}

const remove = async(id, userId) => {
    const customer = await findById(id, userId)

    if (!customer) {
        throw new Error('not found')
    }

    return customer.remove()
}

const count = (userId) => {
    return Customer.countDocuments({ userId })
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove,
    count
}