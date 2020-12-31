'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      User.hasMany(models.Project, {
        foreignKey:"managerEmail",
      });
      
      User.hasMany(models.Project, {
        foreignKey:"clientEmail"
      });

      User.hasMany(models.Developer, {
        foreignKey:"email",
      });

      User.hasMany(models.Topic, {
        foreignKey:"creatorEmail",
      });

      User.hasMany(models.Reply, {
        foreignKey:"creatorEmail",
      });      
      
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};