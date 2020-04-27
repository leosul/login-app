const FB = require('fb')

let fb
const initFB = () => {
    if (!fb) {
        fb = new FB.Facebook({
            appId: process.env.FACEBOOK_APP_ID,
            appSecret: process.env.FACEBOOK_APP_SECRET,
            version: 'v3.3'
        })
    }
    return fb
}

const fetchUser = (token) => {
    const fb = initFB()
    fb.setAccessToken(token)
    return fb.api('/me?fields=id,name,email,picture.type(large),first_name,last_name,location')
}

module.exports = {
    fetchUser
}