'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Reply.belongsTo(models.User, {
        foreignKey:"creatorEmail",
      })

      Reply.belongsTo(models.Topic, {
        foreignKey:"idTopic",
      })

    }
  };
  Reply.init({
    idTopic: DataTypes.INTEGER,
    creatorName: DataTypes.STRING,
    creatorEmail: DataTypes.STRING,
    creatorType: DataTypes.STRING,
    body: DataTypes.STRING,
    creationDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Reply',
    timestamps:false,
  });
  return Reply;
};