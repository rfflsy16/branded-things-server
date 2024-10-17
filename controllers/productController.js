const { Product, User, Category } = require('../models')
const imagekit = require('../helpers/imagekit.js')

class ProductController {
    static async add(req, res, next) {
        try {
            const { userId } = req.loginInfo
            const authorId = userId
            const { name, description, price, stock, imgUrl, categoryId } = req.body
            const product = await Product.create({ name, description, price, stock, imgUrl, categoryId, authorId })

            res.status(201).json({
                message: 'Success create new Product',
                product
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async read(req, res, next) {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password'] }
                    },
                    {
                        model: Category,
                    }
                ]

            })

            res.status(200).json({
                message: 'Success read Products',
                products
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async readDetail(req, res, next) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if (!product) throw ({ name: 'notFound', id })

            res.status(200).json({
                message: `Success read product with id ${product.id}`,
                product
            })
        } catch (err) {
            console.log(err)
        }
    }

    static async updateById(req, res, next) {
        try {
            const { id } = req.params

            let products = await Product.findByPk(id)
            if (!products) throw ({ name: 'notFound', id })

            const { name, description, price, stock, imgUrl, categoryId } = req.body
            await Product.update({ name, description, price, stock, imgUrl, categoryId }, {
                where: {
                    id
                },
            })

            products = await Product.findByPk(id)
            res.status(200).json({
                message: `Success edit product by id ${products.id}`,
                products
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async deletebById(req, res, next) {
        try {
            const { id } = req.params
            let product = await Product.findByPk(id)

            if (!product) throw ({ name: 'notFound', id })

            await Product.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: `Success delete product by id ${id}`,
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async patchImgUrl(req, res, next) {
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if(!product) throw {name: 'ProductNotFound'}

            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ProductController