'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.removeColumn('evaluation', 'id_sector');
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('users');
     
  }
};
