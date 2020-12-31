"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Developer.belongsTo(models.User, {
        foreignKey: "email",
      });

      Developer.hasMany(models.Chunk, {
        foreignKey: "emailDev",
      });

      Developer.hasMany(models.Evaluation, {
        foreignKey: "email",
      });
    }
  }
  Developer.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      prevProjects: DataTypes.STRING,
      tools: DataTypes.STRING,
      comments: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Developer",
      timestamps: false,
    }
  );
  return Developer;
};

