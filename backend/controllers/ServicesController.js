
import {Worker , WorkerReview} from '../models/Worker.js'
import File from '../models/File.js'


import bcrypt from 'bcryptjs';
import passport from 'passport';




const workerlogin = (req, res, next) => {

  console.log(req.body);


  passport.authenticate("local-two", (err, user, info) => {

    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;

        res.send(user);
        console.log(req.user);
      });
    }
  })(req, res, next);
}

const workerregister = (req, res) => {

  console.log(req.body);
  Worker.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new Worker({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
        aadharCard: req.body.aadharCard,
        panCard: req.body.panCard,
        extraDocument: req.body.extraDocument,
        services: req.body.services,
        descriptionofworker: req.body.description,
        contactNo: req.body.contactNo,
      });

      console.log(newUser);
      await newUser.save();
      res.send("Worker Created");
    }
  });
}

const getWorker = (req, res) => {
  console.log("In user" + req.user);
  res.send(req.user);
}

const  workerValidation = async(req , res) => {
  console.log(req.body);
}



export  { workerlogin , workerregister , getWorker  , workerValidation};
