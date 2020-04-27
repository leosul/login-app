const userRepository = require('./../repositories/userRepository')
const facebookService = require('./facebookService')
const googleService = require('./googleService')
const jwtService = require('./jwtService')

const signin = async(provider, token) => {
    try {
        let userData

        switch (provider) {
            case 'google':
                userData = await fetchGoogleUser(token)
                break

            case 'facebook':
                userData = await fetchFacebookUser(token)
                break
        }

        const user = await createOrUpdateUser(userData)
        const jwt = generateJwt(user)

        return {
            token: jwt,
            name: user.name,
            picture: user.picture,
            provider: user.provider
        }
    } catch (e) {
        console.error(e)
    }
}

const fetchGoogleUser = async(token) => {
    const googleUser = await googleService.fetchUser(token)

    return {
        provider: 'google',
        externalId: googleUser.sub,
        name: googleUser.name,
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        email: googleUser.email,
        picture: googleUser.picture,
        locale: googleUser.locale
    }
}

const fetchFacebookUser = async(token) => {
    const fbUser = await facebookService.fetchUser(token)

    return {
        provider: 'facebook',
        externalId: fbUser.id,
        name: fbUser.name,
        firstName: fbUser.first_name,
        lastName: fbUser.last_name,
        email: fbUser.email,
        picture: fbUser.picture && fbUser.picture.data && fbUser.picture.data.url,
        locale: fbUser.location
    }
}

const generateJwt = (user) => {
    const userObject = (typeof user.toObject === 'function') ? user.toObject() : user
    return jwtService.generate(userObject)
}

const createOrUpdateUser = async(userData) => {
    const { provider, externalId } = userData
    let user = await userRepository.findByProvider(provider, externalId)

    if (!user) {
        user = await userRepository.insert(userData)
    } else {
        user = await userRepository.update(user._id, userData)
    }

    return user
}

module.exports = {
    signin
}