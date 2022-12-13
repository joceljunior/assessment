'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('evaluationOption', 
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
         id_session: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {model: 'session', key: 'id'},
           
        },
        id_option: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'templateOption', key: 'id'},
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
    
      await queryInterface.dropTable('evaluationOption');
     
  }
};
