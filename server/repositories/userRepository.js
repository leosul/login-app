const User = require('./../models/User')

const findByProvider = (provider, externalId) => {
    return User.findOne({ provider, externalId })
}

const insert = (userData) => {
    const user = new User({...userData })
    return user.save()
}

const update = async(id, userData) => {
    const user = await User.findById(id)

    if (!user) {
        throw new Error('not found')
    }

    Object.assign(user, userData)
    return user.save()
}

module.exports = {
    findByProvider,
    insert,
    update
}