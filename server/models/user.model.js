import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isVendor:{
     type:Boolean,
     default:false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);