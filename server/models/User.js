const { mongoose } = require('./../database/connection')

const User = mongoose.model('User', {
    provider: {
        type: String,
        required: true,
        enum: ['google', 'facebook'],
        index: true
    },
    externalId: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },
    firstName: {
        type: String,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        maxlength: 100,
        trim: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/
                return emailRegex.test(value)
            },
            message: 'e-mail is not valid'
        }
    },
    picture: {
        type: String,
        trim: true
    },
    locale: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = User