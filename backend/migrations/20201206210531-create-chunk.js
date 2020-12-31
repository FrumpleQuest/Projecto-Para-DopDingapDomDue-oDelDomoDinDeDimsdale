"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Chunks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idProject: {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          key: "id",
          as: "idProject",
        },
      },
      emailDev: {
        type: Sequelize.STRING,
        references: {
          model: "Developers",
          key: "email",
          as: "emailDev",
        },
      },
      startingDate: {
        type: Sequelize.DATEONLY,
      },
      deadline: {
        type: Sequelize.DATEONLY,
      },
      state: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Chunks");
  },
};

