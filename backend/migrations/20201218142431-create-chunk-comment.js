"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ChunkComments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idChunk: {
        type: Sequelize.INTEGER,
        references: {
          model: "Chunks",
          key: "id",
          as: "idChunk",
        },
      },
      body: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ChunkComments");
  },
};

