const router = require("express").Router();
const { Movie, Review, User } = require("../models");
// Find all available movies from the movie model, and display them on screen. Each object includes an image and a description.
router.get("/", async (req, res) => {
  try {
    // find all movies from table
    const movieData = await Movie.findAll();
    // for each movie object in the array, 'get' the essential information.
    const movies = movieData.map((movie) => movie.get({ plain: true }));
// render the movieList.handlebars page. Pass in movies array and the logged in parameter of the req.session object.
    const movies1 = movies.slice(0, 3);
    const movies2 = movies.slice(3, 6);
    const movies3 = movies.slice(6);
    res.render("movieList", {
      movies1,
      movies2,
      movies3,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// The login page will allow users to either sign up or login to the site.
router.get("/login", (req, res) => {
  // user is redirected to the homepage if they are already logged in.
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
// if user is not already logged in, render the login page.
  res.render("login");
});
// User can view the all of the information on the movie that they selected. If they are logged in, they will be able to leave a review.
router.get("/movie/:id", async (req, res) => {
  try {
    // find the movie by it's primary key from the req.params.id
    const movieData = await Movie.findByPk(req.params.id, {
      include: {
        // display any previous reviews
        model: Review,
        attributes: ["content", "user_id"],
        // use this to see which user made each review.
        include: [{ model: User }],
      },
    });

    const movie = movieData.get({ plain: true });

    // pass movie object to view along with currently logged in user photo, and the boolean loggedIn. 
    res.render("review", {
      movie: movie,
      photo: req.session.photo,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

