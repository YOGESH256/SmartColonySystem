import passport from 'passport';

const kl = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }





    return next();


  },

  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }
};


const ensureAuthenticated = kl.ensureAuthenticated;
const forwardAuthenticated = kl.forwardAuthenticated;
const checkAuth = kl.checkAuth;

export {ensureAuthenticated , forwardAuthenticated }
