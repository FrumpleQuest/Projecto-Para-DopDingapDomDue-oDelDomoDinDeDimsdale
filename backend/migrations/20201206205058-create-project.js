'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      managerEmail: {
        type: Sequelize.STRING,
        references: {
          model:"Users",
          key:"email",
          as:"managerEmail",
        },
      },
      clientEmail: {
        type: Sequelize.STRING,
        references:{
          model:"Users",
          key:"email",
          as:"clientEmail",
        },        
      },
      startingDate: {
        type: Sequelize.DATEONLY
      },
      deadline: {
        type: Sequelize.DATEONLY
      },
      description: {
        type: Sequelize.STRING
      },
      repository: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};