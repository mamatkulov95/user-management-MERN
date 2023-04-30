const {Schema, model} = require('mongoose')

const userModel = new Schema({
    userName:{
    type:String,
    required:true,
    minlenght:4
  },
    email:{
    type:String,
    required:true,
    minlenght:8
  },
  password:{
    type:String,
    required:true,
    minlenght:8
  },
  registrationTime:{
    type: String
  },
  lastLogin:{
    type: String
  },
  isBlocked: { type: Boolean,  }
 })


module.exports = model("User", userModel)