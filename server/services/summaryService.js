const summaryRepository = require('./../repositories/summaryRepository')

const getSummary = () => {
    return summaryRepository.getSummary()
}

module.exports = {
    getSummary
}