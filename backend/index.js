import  express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './connect.js';
import  Routes from './routes/Routes.js'
import cors from 'cors';
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import path from 'path'


var workerPassport = new  passport.Passport();
var userPassport = new  passport.Passport();

import passportConfig from "./middleware/passportworker.js";
passportConfig(workerPassport);


import passportConfigs from "./middleware/passport.js";
passportConfigs(userPassport);






const app = express()


dotenv.config();



connectDB();



app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);




app.use(session({
	secret: 'Your secret key',
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({
      mongoUrl: mongoose.connection._connectionString,
      mongoOptions: { useUnifiedTopology: true }
    }),
}));


//passport



app.use(passport.initialize());
app.use(passport.session());
// Set global var
app.use(function (req, res, next) {

// res.locals.login = req.isAuthenticated();

// console.log(req.locals.login);


  next()
})

const __dirname = path.resolve()
app.use('/files' , express.static(path.join(__dirname , '/files')))






app.use('/', Routes);









app.listen(4000 , () => {
  console.log("Server is Listening");
});
