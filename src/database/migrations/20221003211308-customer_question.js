'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customerQuestion', 
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
         },
         id_question: {
             type: Sequelize.INTEGER,
             allowNull: false,
             references: {model: 'templateQuestion', key: 'id'}
         },
         id_customer: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'customer', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        id_sector: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'sector', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        order: {
            type: Sequelize.INTEGER,
            allowNull: false,
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
    await queryInterface.dropTable('customerQuestion');
     
  }
};
