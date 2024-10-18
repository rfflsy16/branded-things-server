
const { where } = require('sequelize');
const { Category } = require('../models')


class CategoryController {
    static async read(req, res, next) {
        try {
            console.log('MASUK');
            
            const category = await Category.findAll()
            res.status(200).json({
                message:'Success read Category',
                category
            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async create(req, res, next) {
        try {
            const { name } = req.body
            const category = await Category.create({name})

            res.status(201).json({
                message:'Success add Category',
                category
            })
            
        } catch (error) {
            next(error)
        }
    }
    static async update(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const category = await Category.update({ name }, {where : {
                id
            }})

            res.status(200).json({
                message: 'Success edit Category',
                category
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController