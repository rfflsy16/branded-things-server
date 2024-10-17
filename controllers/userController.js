"use strict"

const { User } = require('../models')
const { compare, hash } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')



class UserController {
    static async addUser(req, res, next) { //add-user => boleh diakses hanya admin. admin bisa add user yaitu staff(role)
        try {
            const {username, email, password, role, phoneNumber, address} = req.body
            const user = await User.create({username, email, password: hash(password), role, phoneNumber, address})
            res.status(201).json({
                message: "Success create new user",
                user
            })
        } catch (err) {
            console.log(err)
            next(err)
            
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password} = req.body
            // console.log(password)
            if(!email || !password) throw { name: 'InvalidLogin' }

            const author = await User.findOne({
                where: {
                    email
                }
            })
            // console.log(author)
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
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController