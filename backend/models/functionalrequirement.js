'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FunctionalRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      FunctionalRequirement.belongsTo(models.Chunk, {
        foreignKey:"idChunk",
      });
    }
  };
  FunctionalRequirement.init({
    idChunk: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.INTEGER, //Dificultad va de 1 a 10, podríamos hacerle una barrita despues.
    cost: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'FunctionalRequirement',
    timestamps:false,
  });
  return FunctionalRequirement;
};