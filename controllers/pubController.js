const { Product, User, Category } = require('../models')

class PubController {
    static async read(req, res, next) {
        try {
            let { page = 1 } = req.query;
            page = Number(page);
            if (isNaN(page) || page < 1) {
                page = 1;
            }

            const limit = 10; 
            const offset = (page - 1) * limit;

            const { count, rows } = await Product.findAndCountAll({
                limit: limit,
                offset: offset,
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password'] }
                    },
                    {
                        model: Category,
                    }
                ]
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