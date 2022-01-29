
import { Strategy as localStrategy} from 'passport-local'

import bcrypt from 'bcryptjs';

// Load User model
import{ Worker , WorkerReview} from '../models/Worker.js'


// const localStrategy = require("passport-local").Strategy;

const passportConfig =  function (passport) {
  passport.use(
    new localStrategy({ usernameField: 'email' }, (email, password, done) => {
      Worker.findOne({ email: email }, (err, user) => {
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
    Worker.findOne({ _id: id }, (err, user) => {

      cb(err, user);
    });
  });
};

export default passportConfig;
