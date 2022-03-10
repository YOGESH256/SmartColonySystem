
import {Worker , WorkerReview} from '../models/Worker.js'
import File from '../models/File.js'
import Order from '../models/OrderReq.js'
import { Tenant } from "../models/Tenant.js";


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

const getWorkerByService = async(req,res) => {
     const serviceName = req.body.servce;
     console.log(serviceName);
     const getAllWorkers = await Worker.find({services : serviceName});
     console.log(getAllWorkers);
     res.send(getAllWorkers);
}

const order = async(req,res) => {

  console.log(req.body.user_id);

  const result = await Tenant.findOne({userId : req.body.user_id})
  if(!result) res.send("Not a Tenant");
  console.log(result);
  const newOrder = new Order({
    worker_id: req.body.worker_id,
    tenant_id: result._id,
  });

  console.log(newOrder);
  await newOrder.save();
  res.send("Success")
}

const getAllOrders = async(req,res) => {
    const o =  req.body;
    console.log(o);
    const reh = await Tenant.findOne({userId : o.user_id})
    console.log(reh);
    if(!reh) res.send("Not a Tenant");
    const result = await Order.find({tenant_id : reh._id}).populate("worker_id");
    console.log(result);
    res.send(result);
}

const getWorkerOrders = async(req,res) => {
    const o =  req.body;
    console.log(o);
    const result = await Order.find({worker_id : o.worker_id}).populate("tenant_id");
    console.log(result);
    res.send(result);
}



export  { workerlogin , workerregister , getWorker  , workerValidation, getWorkerByService,order,getAllOrders,getWorkerOrders};
