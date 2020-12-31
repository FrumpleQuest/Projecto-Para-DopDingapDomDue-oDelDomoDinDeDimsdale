'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Evaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        references: {
          model: "Developers",
          key: "email",
          as: "email"
        }
      },
      score: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      creationDate: {
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Evaluations');
  }
};