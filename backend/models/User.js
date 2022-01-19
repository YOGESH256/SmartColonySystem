import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

  username : {
    type: String,
      required: true,

  },
  password : {
    type: String,
      required: true,

  },
  email: {
    type: String,
    required: true,

  }
 //  googleId: {
 //   type: String,
 //   required: true,
 // },
 // displayName: {
 //   type: String,
 //   required: true,
 // },
 // firstName: {
 //   type: String,
 //   required: true,
 // },
 // lastName: {
 //   type: String,
 //   required: true,
 // },
 // image: {
 //   type: String,
 // },
 ,
 createdAt: {
   type: Date,
   default: Date.now,
 },

});

const User = mongoose.model('User', userSchema);

export default User;
