import  mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  bedrooms: {
    type: String,
    required: true
  },
  bhk: {
    type: String,
    required: true
  },
  unitSize: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tourlink: {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },
  quantity : {
    type: Number,
    required: true,
    default: 0,
  },
  max : {
    type: Number,
    required: true

  },






});

const Property = mongoose.model('Property', propertySchema);

export default Property;
