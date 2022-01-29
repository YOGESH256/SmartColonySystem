
import {Worker , WorkerReview} from '../models/Worker.js'
import File from '../models/File.js'


import bcrypt from 'bcryptjs';
import passport from 'passport';




const workerlogin = (req, res, next) => {

  console.log(req.body);

  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;

        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
}

const workerregister = (req, res) => {
  Worker.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new Worker({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Worker Created");
    }
  });
}

const getWorker = (req, res) => {
  console.log("In user" + req.user);
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
}



export  { workerlogin , workerregister , getWorker };
