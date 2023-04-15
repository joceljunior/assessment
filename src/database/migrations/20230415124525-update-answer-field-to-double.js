'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('evaluation', 'answer', {
      type: Sequelize.DOUBLE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('evaluation', 'answer', {
      type: Sequelize.INTEGER,
    });
  },
};
