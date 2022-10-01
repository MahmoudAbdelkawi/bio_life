const Joi = require('joi');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
fname:{
  type:String,
  minlength:3,
  maxlength:50
},
lname:{
  type:String,
  minlength:3,
  maxlength:50
},
phoneNumber:{
type:String,
minlength:10,
maxlength:10
},
email:{
    type:String,
    required:true,
    minlength:10,
    maxlength:255
},
password:{
    type:String,
    required:true,
    minlength:8,
    maxlength:1024,
},
myReservations:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'reservations'
  }],
 myOffers:[
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:'reserveOffer'
  }
 ],
 isSuperAdmin:{
  type:Boolean,
  default:false
 },
 isAdmin:{
  type:Boolean,
  default:false
 },
 isSubAdmin:{
  type:Boolean,
  default:false
 }
 
}, { timestamps: true });

userSchema.methods.generateAuthToken=function(){
    const token= jwt.sign({_id:this._id,isSuperAdmin:this.isSuperAdmin,isAdmin:this.isAdmin,isSubAdmin:this.isSubAdmin,username:this.username,fname:this.fname,lname:this.lname,phoneNumber:this.phoneNumber,email:this.email},process.env.JWT_KEY);
    return token;
}
const User = mongoose.model("users",userSchema);
function validate(user) {
    const schema = {
      username: Joi.string().min(3).max(50),
      email: Joi.string().min(10).max(255).email(),
      password: Joi.string().min(8).max(255),
      fname:Joi.string().min(3).max(50),
      lname:Joi.string().min(3).max(50),
      phoneNumber:Joi.string().min(10).max(10)
    };
    return Joi.validate(user, schema);
  }
  
  exports.User = User; 
  exports.validate = validate;
  exports.userSchema=userSchema;
