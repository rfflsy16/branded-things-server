const { Op } = require('sequelize');
const { Product, User, Category } = require('../models');
const category = require('../models/category');

class PubController {
    static async read(req, res, next) {
        try {
            const { search, sort, filter, page } = req.query;
            const queryOption = {
                where: {},
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["password"],
                        },
                    },
                ],
            };
            const products = {};

            if (search !== "" && typeof search !== "undefined") {
                queryOption.where.name = {
                    [Op.iLike]: `%${search}%`,
                };

                products.search = search;
            }

            if (sort !== "" && typeof sort !== "undefined") {
                queryOption.order = [["createdAt", `${sort}`]];

                products.sort = sort;
            }

            if (filter !== "" && typeof filter !== "undefined") {
                const filterOption = filter.category.split(",");

                queryOption.where.categoryId = {
                    [Op.in]: filterOption,
                };

                products.filter = filter;
            }

            const limit = 10;

            if (page !== "" && typeof page !== "undefined") {
                queryOption.limit = limit;
                queryOption.offset = (Number(page) - 1) * limit;

                products.currentPage = Number(page);
                products.size = limit;
            }

            const { count, rows } = await Product.findAndCountAll(queryOption);

            if (!isNaN(products.currentPage)) {
                products.totalPage = Math.ceil(count / limit);
            }

            products.total = count;
            products.data = rows;

            res.status(200).json({
                message: 'Success read Products',
                products
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