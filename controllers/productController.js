const { where } = require('sequelize')
const { Product, User, Category } = require('../models')
const handleError = require('../handleError')
const imagekit = require('../helpers/imagekit.js')

class ProductController {
    static async add(req, res, next) {
        try {
            const authorId = 1
            const { name, description, price, stock, imgUrl, categoryId } = req.body
            const product = await Product.create({name, description, price, stock, imgUrl, categoryId, authorId})

            res.status(201).json({
                message: 'Success create new Product',
                product
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async read(req, res, next) {
        try {
            const products = await Product.findAll({
                include: [Category, User]
            })

            res.status(200).json({
                message:'Success read Products',
                products
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async readDetail(req, res, next){
        try {
            const { id } = req.params
            const product = await Product.findByPk(id)

            if (!product) throw ({name : 'notFound', id})
            
            res.status(200).json({
                message:`Success read product with id ${product.id}`,
                product
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async updateById(req, res, next) {
        try {
            const { id } = req.params
            let products = await Product.findByPk(id)
            if (!products) throw ({name: 'notFound', id})

            const { name, description, price, stock, imgUrl, categoryId } = req.body
            const product = await Product.update({ name, description, price, stock, imgUrl, categoryId },{ where: {
                id
            }})

            products = await findByPk(id)
            res.status(200).json({
                message:`Success edit product by id ${product.id}`,
                product
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async deletebById(req, res, next) {
        try {
            const { id } = req.params
            let product = await Product.findByPk(id)

            if(!product) throw ({name: 'notFound', id})

            await Product.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: `Success delete product by id ${id}`,
            })
        } catch (error) {
            console.log(error)
        }
    }

    static async postMiddleware(req, res, next) {
        try {
            const { id } = req.params

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductController