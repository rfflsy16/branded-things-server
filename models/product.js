'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: 'authorId' })
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' })
    }
  }
  Product.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'name is required'
        },
        notEmpty: {
          msg: 'name is required'
        }
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'description is required'
        },
        notEmpty: {
          msg: 'description is required'
        }
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'price is required'
        },
        notEmpty: {
          msg: 'price is required'
        }
      }
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'stock is required'
        },
        notEmpty: {
          msg: 'stock is required'
        }
      }
    },
    imgUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'imgUrl is required'
        },
        notEmpty: {
          msg: 'imgUrl is required'
        }
      }
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'categoryId is required'
        },
        notEmpty: {
          msg: 'categoryId is required'
        }
      }
    },
    authorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'authorId is required'
        },
        notEmpty: {
          msg: 'authorId is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

