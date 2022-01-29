import  mongoose from 'mongoose';



var workerreviewSchema = new mongoose.Schema({

  comments: {
    type: String,
    required: true

  },
  rating: {
    type: Number,
    required: true
  },


});
const WorkerReview = mongoose.model('Workerreview', workerreviewSchema);

const workerSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,

  },

  Services: {
    type: String,

  },
  panCard: {
    type: String,

  },
  aadharCard: {
    type: String,

  },
  extraDocument: {
    type: String,

  },
  status: {
        type: String,
        enum : ['accepted','rejected' ,'unverified'],
        default: 'unverified'
  },

reviews: [workerreviewSchema]




});

const Worker = mongoose.model('Worker', workerSchema);



export  {Worker , WorkerReview};
