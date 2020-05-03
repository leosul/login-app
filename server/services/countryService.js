const countryRepository = require('../repositories/countryRepository')

const findAll = () => {
    return countryRepository.findAll()
}

const findByCountry = (country) => {
    return countryRepository.findByCountry(country)
}

module.exports = {
    findAll,
    findByCountry
}