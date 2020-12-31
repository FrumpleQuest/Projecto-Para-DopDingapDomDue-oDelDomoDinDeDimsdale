'use strict';
const {
  Model, where
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Project.belongsTo(models.User, {
        foreignKey:"clientEmail",
      });

      Project.belongsTo(models.User, {
        foreignKey:"managerEmail",
      });

      Project.hasMany(models.Chunk, {
        foreignKey:"idProject",
      });

    }
  };
  Project.init({

    clientEmail: DataTypes.STRING,
    managerEmail: DataTypes.STRING,
    startingDate: DataTypes.DATEONLY,
    deadline: DataTypes.DATEONLY,
    description: DataTypes.STRING,
    repository: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Project',
    timestamps:false,
  });
  return Project;
};