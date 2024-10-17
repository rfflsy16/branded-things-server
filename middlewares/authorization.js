const { Product } = require('../models')
const checkAdmin = async (req, res, next) => {
    try {
        // console.log(req.loginInfo)
        const { role } = req.loginInfo

        if (role !== 'admin') throw {name: 'NotAdmin'}

        next()
    } catch (err) {
        next(err)
    }
}

const checkStaffAuthorOrAdmin = async(req, res, next) => {
    try {
        // console.log(req.params);
        const role = req.loginInfo.role
        // console.log(role)
        if (role === 'staff') {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if(!product) throw { name :'ProductNotFound' }
            const userId = req.loginInfo.userId
    
            if(product.authorId !== userId) throw {name : 'notAuthor'}
            next()
        }

    } catch (error) {
        next(error)
    }
}

module.exports = { checkAdmin, checkStaffAuthorOrAdmin }