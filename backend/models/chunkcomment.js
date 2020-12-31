"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChunkComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChunkComment.belongsTo(models.Chunk, {
        foreignKey: "idChunk",
      });
    }
  }
  ChunkComment.init(
    {
      idChunk: DataTypes.INTEGER,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ChunkComment",
      timestamps: false,
    }
  );
  return ChunkComment;
};

