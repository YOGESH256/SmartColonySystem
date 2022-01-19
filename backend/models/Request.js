import  mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  userId: {
    type:mongoose.Schema.Types.ObjectId,

    ref:'userId',
  },
  ContactNo: {
    type: String,
    required: true
  },
  StartDate: {
    type: Date,
    required: true

  },
  EndDate: {
    type: Date,
    required: true

  },
  propertyId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Property',
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
  status: {
        type: String,
        enum : ['accepted','rejected' ,'unverified'],
        default: 'unverified'
  },



});

const Request = mongoose.model('Request', requestSchema);

export default Request;
