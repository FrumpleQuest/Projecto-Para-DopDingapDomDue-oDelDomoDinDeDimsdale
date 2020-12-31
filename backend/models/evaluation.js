'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Evaluation.belongsTo(models.Developer, {
        foreignKey:"email",
      });
    }
  };
  Evaluation.init({
    email: DataTypes.STRING,
    score: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    creationDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Evaluation',
    timestamps: false,
  });
  return Evaluation;
};