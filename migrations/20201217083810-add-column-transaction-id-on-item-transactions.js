'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ItemTransactions', 'TransactionId', {
      type: Sequelize.INTEGER,
      references : {
        model: 'Transactions',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ItemTransactions','TransactionId')
  }
};
