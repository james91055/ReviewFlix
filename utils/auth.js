const withAuth = (req, res, next) => {
    
    if (!req.session.loggedIn) {
<<<<<<< HEAD
=======
      console.log("You cannot pass")
>>>>>>> origin
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;