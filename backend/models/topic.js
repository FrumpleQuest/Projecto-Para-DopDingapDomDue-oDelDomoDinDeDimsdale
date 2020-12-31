'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Topic.hasMany(models.Reply, {
        foreignKey:"idTopic",
      });

      Topic.belongsTo(models.User, {
        foreignKey:"creatorEmail",
      })

    }
  };
  Topic.init({
    creatorEmail: DataTypes.STRING,
    creatorName: DataTypes.STRING,
    creatorType: DataTypes.STRING,
    category: DataTypes.STRING, //Discussion, Update, Request, Alert
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    creationDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Topic',
    timestamps:false,
  });
  return Topic;
};