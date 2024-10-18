const Imagekit = require('imagekit')

const imagekit = new Imagekit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.URL_END_POINT
})

module.exports = imagekit