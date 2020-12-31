'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTopic: {
        type: Sequelize.INTEGER,
        references: {
          model:"Topics",
          key:"id",
          as:"idTopic",
        },
      },
      creatorEmail: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "email",
          as: "creatorEmail",
        }
      },
      creatorName: {
        type: Sequelize.STRING
      },
      creatorType: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      creationDate: {
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Replies');
  }
};