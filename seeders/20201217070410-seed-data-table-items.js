// 'use strict';

const readFileTxt = require("../helpers/readFilteTxt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = readFileTxt("./items.txt");
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("Items", data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
