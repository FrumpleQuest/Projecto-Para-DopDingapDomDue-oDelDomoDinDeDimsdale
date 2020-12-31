'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Developers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        references: {
          model:"Users",
          key:"email",
          as:"email",
        },
      },
      prevProjects: {
        type: Sequelize.STRING,
        allowNull: true
      },
      
      tools: {
        type: Sequelize.STRING,
        allowNull: true
      },
      comments: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isFreelancer: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Developers');
  }
};