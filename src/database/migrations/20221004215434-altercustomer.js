'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await  queryInterface.addColumn(
      'customer',
       'url',
       Sequelize.STRING)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'customer',
      'url')
  }
};
