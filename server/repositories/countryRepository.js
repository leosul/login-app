const axios = require('axios')

const findAll = async() => {
    const countries = await axios.get(process.env.BASE_API + '/countries')

    return countries.data
}

const findByCountry = async(country) => {
    const countryData = await axios.get(process.env.BASE_API + '/country/' + country)

    return countryData.data
}

module.exports = {
    findAll,
    findByCountry
}