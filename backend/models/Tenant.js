import  mongoose from 'mongoose';



var reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true

  },
  rating: {
    type: Number,
    required: true
  },
  nature: {
    type: String,
    enum : ['amenities','property'],
    required: true
  },
  Date: {
    type: String,

  }


});
const Review = mongoose.model('review', reviewSchema);

const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },

  servicespassword: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  },
StartDate: {
    type: Date,
    default: Date.now
  },
  EndDate: {
    type: Date,
    default: Date.now
  },
  panCard: {
    type: String,
    required: true
  },
  aadharCard: {
    type: String,
    required: true
  },
  extraDocument: {
    type: String,
    required: true
  },

  // rent pending / no of months
  rentStatus : {
    type : Number,
    required: true,
  },
PropertyId: {
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Property'
},
roomno: {
  type: Number,
  required: true
},
// reviews: [reviewSchema]




});

const Tenant = mongoose.model('Tenant', tenantSchema);


export  {Tenant , Review};
