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
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
      mongoUrl: mongoose.connection._connectionString,
      mongoOptions: { useUnifiedTopology: true }
    }),
}));




//passport





app.use(passport.initialize());
app.use(passport.session());


import passportConfigs from "./middleware/passport.js";
passportConfigs(passport);



// app.use((req, res, next) => {req.user = req.session.user; next()})
// app.use(function(req, res, next){


// req._passport.session = req.session['passport']
//   console.log(req._passport.session + "      ll");
//   next();
// })








const __dirname = path.resolve()
app.use('/files' , express.static(path.join(__dirname , '/files')))






app.use('/', Routes);









app.listen(4000 , () => {
  console.log("Server is Listening");
});
