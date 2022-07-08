const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
// Sing 2
// The Man From Toronto
// Hustle
// Red Notice
// Mean Girls
// The Adam Project
// The Amazing Spider-Man
// The Dark Knight Rises
// A Madea Homecoming
// Back to the Outback
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.DATE,
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
    previewURL: {
      type: DataTypes.STRING,
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
    underscored: true,
    modelName: 'painting',
  }
);

module.exports = Painting;
