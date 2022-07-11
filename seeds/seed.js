const sequelize = require('../config/connection');
const { Movie } = require('../models');

//const userData = require('./userData.json');
const movieData = require('./movieData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const movies = await Movie.bulkCreate(movieData);

  for (const movies of movieData) {
    await Movie.create({
      ...movies,
      id: movies[Math.floor(Math.random() * movies.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
