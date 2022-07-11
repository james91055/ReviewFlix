const router = require('express').Router();
const {Movie} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      
    });

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render('homepage', {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// TODO: double check against model
router.get('/movie/:id', async (req, res) => {
   
      try {
        const movieData = await Movie.findByPk(req.params.id, {
          include: [
            {
              model: Movie,
              attributes: [
                'id',
                'title',
                'year',
                'director',
                'parental_rating',
                'cast',
                'movie_image',
              ],
            },
          ],
        },
         {
            model: Review,
            attributes: [
                'content',
                'rating',
            ],
            
        });
        const movies = movieData.get({ plain: true });
        res.render('review', {movies});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

module.exports = router;