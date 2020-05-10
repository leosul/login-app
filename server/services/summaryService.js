const axios = require('axios')

const getSummary = async() => {
    const summary = await axios.get(process.env.BASE_API + '/summary')

    return summary.data
}

module.exports = {
    getSummary
}