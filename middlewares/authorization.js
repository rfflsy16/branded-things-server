const { Product, User } = require('../models')
const checkAdmin = async (req, res, next) => {
    try {
        // console.log(req.loginInfo)
        const { role } = req.loginInfo

        if (role !== 'admin') throw {name: 'Forbidden'}

        next()
    } catch (err) {
        next(err)
    }
}

const checkStaffAuthorOrAdmin = async(req, res, next) => {
    const {role, userId} = req.loginInfo
    try {
        console.log(req.params);
        if (role === 'staff') {
            const user = await User.findByPk(userId)

            if (!user) throw { name: "Forbidden" }

            const { id } = req.params

            const product = await Product.findByPk(id)

            if(!product) throw { name :'ProductNotFound' }
            
            if(product.authorId !== userId) throw {name : 'notAuthor'}
        }
        next()
    } catch (error) {
         console.log(error)
        next(error)
    }
}

module.exports = { checkAdmin, checkStaffAuthorOrAdmin }