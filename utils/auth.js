const withAuth = (req, res, next) => {
    
    if (!req.session.loggedIn) {
      console.log("You cannot pass")
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;