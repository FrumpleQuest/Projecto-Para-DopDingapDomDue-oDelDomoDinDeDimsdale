"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chunk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Chunk.belongsTo(models.Project, {
        foreignKey: "idProject",
      });

      Chunk.belongsTo(models.Developer, {
        foreignKey: "emailDev",
      });

      Chunk.hasMany(models.FunctionalRequirement, {
        foreignKey: "idChunk",
      });

      Chunk.hasMany(models.ChunkComment, {
        foreignKey: "idChunk",
      });
    }
  }
  Chunk.init(
    {
      idProject: DataTypes.INTEGER,
      emailDev: DataTypes.STRING,
      startingDate: DataTypes.DATEONLY,
      deadline: DataTypes.INTEGER,
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Chunk",
      timestamps: false,
    }
  );
  return Chunk;
};
