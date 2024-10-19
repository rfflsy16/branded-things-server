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
      allowNull: false,
      validate: {
        notNull : {
          msg : 'username is required'
        },
        notEmpty: {
          msg : 'username is required'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
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
      allowNull: false,
      defaultValue : 'Staff',
      validate: {
        notNull : {
          msg : 'role is required'
        },
        notEmpty: {
          msg: 'role is required'
        }
      }
    },
    phoneNumber: {
      allowNull: false,
      type : DataTypes.STRING,
      validate: {
        notNull : {
          msg : 'phoneNumber is required'
        },
        notEmpty: {
          msg : 'phoneNumber is required'
        }
      }
    },
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',

  });
  User.beforeCreate((instance, option) => {
    instance.password = hash(instance.password);
  })
  return User;
};