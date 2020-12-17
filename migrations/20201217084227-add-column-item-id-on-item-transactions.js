'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ItemTransactions', 'ItemId', {
      type: Sequelize.INTEGER,
      references : {
        model: 'Items',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ItemTransactions','ItemId')
  }
};
