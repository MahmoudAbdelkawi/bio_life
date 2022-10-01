const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
Joi.objectId= require('joi-objectid')(Joi);
const reserveSchema = new mongoose.Schema({
fname:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
lname:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
email:{
    type:String,
    minlength:10,
    maxlength:255
},
phoneNumber:{
    type:String,
    minlength:10,
    maxlength:10
},
res_number:{
type:String,
minlength:6,
maxlength:6
},
date:{
    type: Date,
    required: true
},
department:{
    type:ObjectId,
    ref:'departments'
}
,
doctor:{
    type:ObjectId,
    ref:'member'
},
user:{
    type:ObjectId,
    ref:'users'
},
status:{
    type:String,
    default:'pending'
}
},{timestamps: true});

const Reserve = mongoose.model("reservations",reserveSchema);
function validate(res) {
    const schema = Joi.object({
      fname: Joi.string().min(3).max(50),
      lname: Joi.string().min(3).max(50),
      email:Joi.string().email().min(10).max(255),
      phoneNumber:Joi.string().min(10).max(10),
      date:Joi.date(),
      department:Joi.objectId(),
      doctor:Joi.objectId(),
      user:Joi.objectId(),
      status:Joi.string()
  });
  const result = schema.validate(res);
  return result;
  }
  exports.validate=validate;
  exports.Reserve=Reserve;
