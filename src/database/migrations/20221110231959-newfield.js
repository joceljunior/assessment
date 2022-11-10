'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.addColumn(
      'evaluation',
       'comment',
       Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'evaluation',
      'comment');
  
  }
};
