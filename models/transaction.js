'use strict';
const {
  Model
} = require('sequelize');
const countTotal = require('../helpers/countTotal');
const generateInvoice = require('../helpers/generateInvoice');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsToMany(models.Item, {
        through: 'ItemTransactions'
      })
      Transaction.belongsTo(models.Employee)
    }
  };
  Transaction.init({
    invoice: DataTypes.STRING,
    total: DataTypes.INTEGER,
    EmployeeId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(transactions, options) {
        transactions.invoice = generateInvoice()
        transactions.total = countTotal()
      }
    },
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};