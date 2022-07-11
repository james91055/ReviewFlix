const router = require('express').Router();
const {Movie, Review} = require('../models');



router.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      
    });

    const movies = movieData.map((movie) => movie.get({ plain: true }));

    res.render('movieList', {
      movies,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });
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
        const movie = movieData.get({ plain: true });
        res.render('review', {movie});
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );

module.exports = router;

// const router = require('express').Router();
// const { Movie } = require('../models');


// router.get('/movies', async (req, res) => {
//   try {

//   const movieData = await Movie.findAll()
//   console.log(movieData)
//   const movies = movieData.map((movie) =>
//     movie.get({ plain: true })
//   );
//   console.log(movies);

//   //res.json(movie);
//   res.render('movieList', {movies});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
