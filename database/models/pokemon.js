'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pokemon.init({
    name: DataTypes.STRING,
    noPokedex: DataTypes.INTEGER,
    tipo1: DataTypes.STRING,
    tipo2: DataTypes.STRING,
    habilidad: DataTypes.STRING,
    region: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'pokemon',
  });
  return pokemon;
};