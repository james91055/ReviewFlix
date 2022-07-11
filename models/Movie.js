const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mpaa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
        type: DataTypes.STRING
    },
    outOfTen: {
        type: DataTypes.DECIMAL
    },
    directors: {
        type: DataTypes.STRING
    },
    writer: {
        type: DataTypes.STRING
    },
    stars: {
        type: DataTypes.TEXT
    },
    movieURL: {
        type: DataTypes.STRING,
    },
    previewURL: {
        type: DataTypes.STRING,
    },


    },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'movie',
  }
);

module.exports = Movie;
