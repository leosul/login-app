const jwt = require('jsonwebtoken')

const generate = (object) => {
    return jwt.sign(object, process.env.JWT_PRIVATE_KEY, { expiresIn: '60d' })
}

const verify = (token) => {
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY)
}

module.exports = {
    generate,
    verify
}