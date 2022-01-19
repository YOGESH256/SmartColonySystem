import  mongoose from 'mongoose';



var reviewSchema = new mongoose.Schema({

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
  }

});
const review = mongoose.model('review', reviewSchema);

const tenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
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
reviews: [reviewSchema]




});

const Tenant = mongoose.model('Tenant', tenantSchema);


export default Tenant;
