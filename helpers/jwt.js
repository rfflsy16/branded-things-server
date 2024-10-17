const jwt = require('jsonwebtoken')
const privateKey = process.env.SECRET_KEY

const signToken = (payload) => {
    return jwt.sign(payload, privateKey)

}
const verifyToken = (payload) => {
    return jwt.verify(payload, privateKey)
}

module.exports = { signToken, verifyToken }