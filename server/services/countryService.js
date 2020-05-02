const countryRepository = require('../repositories/countryRepository')

const findAll = () => {
    return countryRepository.findAll()
}

module.exports = {
    findAll
}