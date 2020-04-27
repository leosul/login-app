const { OAuth2Client } = require('google-auth-library')

let client
const initClient = (clientId) => {
    if (!client) {
        client = new OAuth2Client(clientId)
    }
    return client
}

const fetchUser = async(token) => {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const client = initClient(clientId)

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId
    })

    return ticket.getPayload()
}

module.exports = {
    fetchUser
}