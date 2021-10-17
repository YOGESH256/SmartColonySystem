const mongoose = require('mongoose');

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








});

const User = mongoose.model('User', userSchema);

module.exports = User;
