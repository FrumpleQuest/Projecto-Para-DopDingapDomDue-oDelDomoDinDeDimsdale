'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Topics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creatorEmail: {
        allowNull:false,
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "email",
          as: "creatorEmail",
        }
      },
      creatorType: {
        type: Sequelize.STRING
      },
      creatorName: {
        type: Sequelize.STRING
      },
      category: {
        allowNull:false,
        type: Sequelize.STRING
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      creationDate: {
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Topics');
  }
};