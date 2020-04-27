const mongoosePaginate = require('mongoose-paginate-v2')
const { mongoose } = require('./../database/connection')
const ObjectId = mongoose.SchemaTypes.ObjectId

const CustomerSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true
    },
    document: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    birthday: {
        type: Date,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

CustomerSchema.plugin(mongoosePaginate)
const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer