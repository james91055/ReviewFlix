const router = require('express').Router();
const movieData = require('../../seeds/movieData.json');


router.get('/', async (req, res) => {
  try {

  const movieData = await Movie.findAll({})
  const movies = movieData.map((movie) =>
    movie.get({ plain: true })
  );
  console.log(movies);

  res.render('movieList', {
      movies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// // type
// router.get('/project/:genre', async (req, res) => {
//  //TODO: Add code to find one of the projects and the associated user and render project
//  try {
//   const projectData = movieData.filter((movie) => movie.genre === req.params.genre);
//   const project = projectData.get({ plain: true });
//   res.render('project', { project });
// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // TODO: Add a comment describing the functionality of this property
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.get('/profile', async (req, res) => {
//   //TODO: Add code to find the loggedIn user and their associated projects and render profile
//   res.render('profile');
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
