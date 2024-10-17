const { where } = require('sequelize')
const { Category } = require('../models')


class CategoryController {
    static async delete(req, res, next) {
        try {
            const { id } = req.params

            let category = await Category.findByPk(id)

            if(!category) throw {name: 'deleteError'}

            await Category.destroy({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: `Category id ${category.id} is been deleted`
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = CategoryController