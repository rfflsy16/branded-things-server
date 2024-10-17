"use strict"

const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) { //add-user => boleh diakses hanya admin. admin bisa add user yaitu staff(role)
        try {
            const {username, email, password, role, phoneNumber, address} = req.body
            const user = await User.create({username, email, password, role, phoneNumber, address})
            res.status(201).json({
                message: "Success create new user",
                user
            })
        } catch (error) {
            console.log(error)
            
        }
    }
    static async login(req, res, next) {
        try {
            const { username, email, password} = req.body

            if(!username || !email || !password) throw { name: 'InvalidLogin' }

            const author = await User.findOne({
                where: {
                    email
                }
            })

            if (!author) throw {name: 'LoginError'}

            if (!compare(password, author.password)) throw { name: "LoginError" } 

            const payload = {
                id: author.id,
                email: author.email,
                role: author.role
            }

            const access_token = signToken(payload)
            res.status(200).json({
                access_token
            })
        } catch (error) {
            
        }
    }
}

module.exports = UserController