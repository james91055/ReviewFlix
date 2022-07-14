const router = require('express').Router();
const { Movie } = require('../../models');

// get all movies from the database, create
router.get('/movies', async (req, res) => {

  try {
  const movieData = await Movie.findAll()
  const movies = movieData.map((movie) =>
    movie.get({ plain: true })
  );

  res.render('movieList', {movies});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
