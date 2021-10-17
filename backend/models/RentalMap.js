const mongoose = require('mongoose');

const rentalmapSchema = new mongoose.Schema({

  tenantId : {
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Tenant'
  },
  PropertyId: {
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Property',
  },
 roomno : {
   type: Number,
   reuired: true
},
availitype: {
  type: Boolean,
  reuired: true
}


});

const Rentalmap = mongoose.model('Rentalmap', rentalmapSchema);

module.exports = Rentalmap;
