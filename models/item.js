'use strict';
const {
  Model
} = require('sequelize');
const formatRupiah = require('../helpers/formatRupiah');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get nominal() {
      return formatRupiah(this.price)
    }
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Transaction, {
        through: 'ItemTransactions'
      })
      // Item.hasMany(models.ItemTransaction)
    }
  };
  Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};