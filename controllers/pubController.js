const { Op } = require('sequelize');
const { Product, User, Category } = require('../models');
const category = require('../models/category');

class PubController {
    static async read(req, res, next) {
        try {
             let queryOption = {};

            const { filter } = req.query;
            if (filter && typeof filter === 'string') {
                const categoryIds = filter.split(',').map(id => id.trim());
                queryOption.where = {
                    categoryId: {
                        [Op.or]: categoryIds.map(id => ({ [Op.eq]: id }))
                    }
                };
            }

            let { sort } = req.query;
            if (sort && typeof sort === 'string') {
                if (sort.charAt(0) === '-') {
                    queryOption.order = [[sort.slice(1), 'DESC']];
                } else {
                    queryOption.order = [[sort, 'ASC']];
                }
            }

            let { page = 1 } = req.query;
            page = Number(page);
            if (isNaN(page) || page < 1) {
                page = 1;
            }

            const limit = 10; 
            const offset = (page - 1) * limit;

            const { count, rows } = await Product.findAndCountAll({
                ...queryOption,
                limit: limit,
                offset: offset
            });

            const totalPage = Math.ceil(count / limit);

            const result = {
                total: count,
                size: limit,
                totalPage: totalPage,
                currentPage: page,
                data: rows
            };


            res.status(200).json({
                message: 'Success read Products',
                result
            });
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
            next(err)
        }
    }
}

module.exports = PubController