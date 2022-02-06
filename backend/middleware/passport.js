
import { Strategy as localStrategy} from 'passport-local'
import{ Worker , WorkerReview} from '../models/Worker.js'

import bcrypt from 'bcryptjs';

// Load User model
import User from '../models/User.js'


// const localStrategy = require("passport-local").Strategy;

const passportConfigs =  function (passport) {
  passport.use(
    'local-one' ,
    new localStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        // console.log("In middleware" , username , password , email);
        if (err) throw err;
        // console.log("In middleware" , username , password , email);
        if (!user) return done(null, false);
        // console.log("In middleware" , username , password , email);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;

          if (result) {

            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );


  passport.use(
    'local-two',
    new localStrategy({ usernameField: 'email' }, (email, password, done) => {
      Worker.findOne({ email: email }, (err, user) => {
        // console.log("In middleware" , username , password , email);
        if (err) throw err;
        // console.log("In middleware" , username , password , email);
        if (!user) return done(null, false);
        // console.log("In middleware" , username , password , email);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result) {

            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );



  passport.serializeUser(function(user, done) {
    // console.log(user._id.toString());
    done(null, user._id.toString());
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
});

passport.deserializeUser(function(_id, done) {
  console.log("JJJJJJJJJJJJJJJj");
  User.findById(_id, function(err, user) {
    done(err, user);
  });

});

};

export default passportConfigs;
