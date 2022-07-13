const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}
// review model to create the reviews made by users
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          }
    },
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'movie',
            key: 'id',
          }
    },


    },

  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
