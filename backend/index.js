import  express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './connect.js';
import  Routes from './routes/Routes.js'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config();



connectDB();

app.use('/', Routes);







app.listen(4000 , () => {
  console.log("Server is Listening");
});
