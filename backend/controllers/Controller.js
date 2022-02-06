import Property from '../models/Property.js'
import {Tenant , Review} from '../models/Tenant.js'
import User from '../models/User.js'
import File from '../models/File.js'
import Request from '../models/Request.js'

import session from 'express-session'

import bcrypt from 'bcryptjs';
import passport from 'passport';


const getPropertyData = async(req, res) => {
  const products = await Property.find({});


  // console.log(products);
  res.json(products)
}

const addPropertyData = async(req, res) => {
  const op = req.body;
  // console.log(op);

const ol = new Property(op);

await ol.save();

  res.json({
    message: "Added sucessfully"
  });
}




const login = (req, res, next) => {

  console.log(req.body);

  passport.authenticate("local-one", (err, user, info) => {
    if (err) throw err;
    if (!user){

      res.send("No User Exists")
    }
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        // res.status(200).json({errors: false, user: user});
        res.send(user)

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

const getUser = async(req, res) => {
// console.log(req.passport.session.user);
console.log(req.user);
console.log(req.session);




res.send(req.user)


 // The req.user stores the entire user that has been authenticated inside of it.
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
     user: req.body.userId,
     aadharCard: req.body.aadharCard,
     panCard: req.body.panCard,
     extraDocument: req.body.extraDocument,
     ContactNo: req.body.contactNo,
     StartDate: req.body.startDate,
     EndDate: req.body.endDate,
     property: req.body.propertyId,
   })



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

   const request = await Request.find({status: "unverified"}).populate("property").populate("user");


   console.log(request);




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


const tenantData = async(req , res) => {

console.log(req.body);

  try {
    const tenant = new Tenant({
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      aadharCard: req.body.aadharCard,
      panCard: req.body.panCard,
      extraDocument: req.body.extraDocument,
      contactNo: req.body.contactNo,
      StartDate: req.body.startDate,
      EndDate: req.body.endDate,
      PropertyId: req.body.propertyId,
      roomno: req.body.roomno,
      servicespassword:req.body.name + req.body.contactNo,
      rentStatus: 0,
    })



    await tenant.save();



const property = await Property.findById(req.body.propertyId);

const io = property.roomnos.filter(hj => hj != req.body.roomno );


property.roomnos = io;

await property.save();







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


const statusData = async(req , res) => {

  console.log(req.body);
  const {id , status} = req.body;

  try {
const request = await Request.findById(id);

request.status = status;
await request.save();


  } catch (error) {

    console.log(error);
    res.json({
      error,
    });
  }



}


const addReviewData = async(req, res) => {
console.log(req.body);






try {

  const ol = await Tenant.findOne({userId: req.body.userId  });
  console.log(ol);


  if(!ol)
  {
    return res.json({
      message: "Error"
    });

  }




  const review = new Review({
    comments: req.body.message,
    rating: req.body.rating,
    nature: req.body.nature,
    name: req.body.name,

  })



  await review.save();







    return res.json({
      message: "Added Tenant Data"
    });
} catch (e) {

console.log(e);
}


}





const allReviewsByType = async(req , res) => {

console.log(req.query);
  const reviews = await Review.find({nature : req.query.type});




  res.json(reviews)
}






export  {getPropertyData , addPropertyData , addReviewData , login , register , getUser , getFiles ,UploadFile  , documentData , getAllRequest , tenantData , statusData , allReviewsByType};
