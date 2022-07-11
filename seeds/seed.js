const sequelize = require('../config/connection');

const { Movie } = require('../models');
const { User } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const movies = await Movie.bulkCreate(movieData);

  // for (const movie of movieData) {
  //   await Movie.create({
  //     ...movie,
  //     id: movies[Math.floor(Math.random() * movies.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();

