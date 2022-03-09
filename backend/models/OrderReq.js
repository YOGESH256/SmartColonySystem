import  mongoose from 'mongoose';

const OrderReq = new mongoose.Schema({
  tenant_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Tenant',
  },
  worker_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Worker',
  },
  time : {
    type : String,
  }
});

const Order = mongoose.model('Order', OrderReq);

export default Order;
