'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, { foreignKey: 'authorId'})
    }
  }
  User.init({
    username:{
      type : DataTypes.STRING,
      validate: {
        notNull : {
          msg : 'username is required'
        },
        notEmpty: 'username is required'
      }
    },
    email: {
      type : DataTypes.STRING,
      unique : {
        msg : 'email must be unique'
      },
      validate: {
        notNull : {
          msg : 'email is required'
        },
        notEmpty: {
          msg: 'email is required'
        },
        isEmail: true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate: {
        notNull : {
          msg : 'password is required'
        },
        notEmpty: {
          msg: 'password is required'
        },
        len : {
          args: 5,
          msg: 'Password minimum 5 character'
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : 'Staff',
      validate: {
        notNull : {
          msg : 'role is required'
        },
        notEmpty: 'role is required'
      }
    },
    phoneNumber: {
      type : DataTypes.STRING,
      validate: {
        notNull : {
          msg : 'phoneNumber is required'
        },
        notEmpty: 'phoneNumber is required'
      }
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};