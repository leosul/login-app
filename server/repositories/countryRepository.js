const axios = require('axios')

const findAll = async() => {
    const countries = await axios.get(process.env.BASE_API + '/countries')

    return countries.data
}

module.exports = {
    findAll
}