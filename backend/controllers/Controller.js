import Property from '../models/Property.js'
import Tenant from '../models/Tenant.js'
import User from '../models/User.js'
import File from '../models/File.js'
import Request from '../models/Request.js'

import bcrypt from 'bcryptjs';
import passport from 'passport';


const getPropertyData = async(req, res) => {
  const products = await Property.find({});
  console.log(products);
  res.json(products)
}

const addPropertyData = async(req, res) => {
  const op = req.body;
  console.log(op);

const ol = new Property(op);

await ol.save();

  res.json({
    message: "Added sucessfully"
  });
}

const addReviewData = async(req, res) => {
  const op = req.body;
  console.log(op.nature);

const ol = await  Tenant.findById("61adccb3d8b47f7d31beb91d")
console.log(ol);

ol.reviews.push(op);



await ol.save();

  res.json({
    message: "Added Tenant Data"
  });
}


const login = (req, res, next) => {

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

const register = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
}

const getUser = (req, res) => {
  console.log("In user" + req.user);
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
}




 const UploadFile = async(req, res) => {

  try {
    const newFile = await File.create({
      name: req.file.filename,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
  } catch (error) {
    res.json({
      error,
    });
  }

};


const getFiles =  async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
}


const documentData = async(req , res) => {

  console.log(req.body);


 try {
   const request = new Request({
     userId: "61b397610a6f2a532ebe2f1a",
     aadharCard: req.body.aadharCard,
     panCard: req.body.panCard,
     extraDocument: req.body.extraDocument,
     ContactNo: req.body.contactNo,
     StartDate: req.body.startDate,
     EndDate: req.body.endDate,
     propertyId: req.body.propertyId,
   })

   console.log(request);

   await request.save();

   res.status(200).json({
     status: "success",
     message: "Request created successfully!!",
   });

 } catch (error) {

   console.log(error);
   res.json({
     error,
   });
 }




}


const getAllRequest = async(req , res) => {


   try {

   const request = await Request.find({}).populate("propertyId")

   res.status(200).json({
     status: "success",
     request,
   });


   } catch (error) {

     console.log(error);
     res.json({
       error,
     });
   }

}













export  {getPropertyData , addPropertyData , addReviewData , login , register , getUser , getFiles ,UploadFile  , documentData , getAllRequest};
