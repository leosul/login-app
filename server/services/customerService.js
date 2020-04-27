const customerRepository = require('./../repositories/customerRepository')

const findAll = (userId, page) => {
    return customerRepository.findAll(userId, page)
}

const findById = (id, userId) => {
    return customerRepository.findById(id, userId)
}

const insert = async(customerData) => {
    const { isValid, message } = await beforeInsert(customerData)

    if (!isValid) {
        throw new Error(message)
    }

    const customer = await customerRepository.insert(customerData)
    return findById(customer._id, customer.userId)
}

const update = async(id, customerData) => {
    const customer = await customerRepository.update(id, customerData)
    return findById(customer._id, customer.userId)
}

const remove = (id, userId) => {
    return customerRepository.remove(id, userId)
}

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}