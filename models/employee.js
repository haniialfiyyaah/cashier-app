'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/hashPassword');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasMany(models.Transaction)
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(data, options) {
        data.password = hashPassword(data.password)
      }
    },
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};