'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Session', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
       },
       id_customer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'customer', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
       created_at: {
           type: Sequelize.DATE,
           allowNull: false,
       },
       updated_at: {
           type: Sequelize.DATE,
           allowNull: true,
       }
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Session');
  }
};
