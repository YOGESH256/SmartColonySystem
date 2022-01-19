
import { Strategy as localStrategy} from 'passport-local'

import bcrypt from 'bcryptjs';

// Load User model
import User from '../models/User.js'


// const localStrategy = require("passport-local").Strategy;

const passportConfigs =  function (passport) {
  passport.use(
    new localStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        // console.log("In middleware" , username , password , email);
        if (err) throw err;
        // console.log("In middleware" , username , password , email);
        if (!user) return done(null, false);
        // console.log("In middleware" , username , password , email);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        email: user.email
      };
      cb(err, userInformation);
    });
  });
};

export default passportConfigs;
