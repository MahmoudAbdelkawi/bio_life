const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
Joi.objectId= require('joi-objectid')(Joi);

const reserveOfferSchema = new mongoose.Schema({
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
offer_number:{
type:String,
minlength:6,
maxlength:6
},
user:{
    type:mongoose.Schema.Types.Object,
    ref:'users'
},
status:{
    type:String,
    default:'pending'
},
offer:{
    type:ObjectId,
   ref:'offers'
}
},{timestamps: true});

const ReserveOffer = mongoose.model("reserveOffer",reserveOfferSchema);
function validate(res) {
    const schema = Joi.object({
      fname: Joi.string().min(3).max(50),
      lname: Joi.string().min(3).max(50),
      email:Joi.string().email().min(10).max(255),
      phoneNumber:Joi.string().min(10).max(10),
      offer:Joi.objectId(),
      user:Joi.objectId()
  });
  const result = schema.validate(res);
  return result;
  }
  exports.validate=validate;
  exports.ReserveOffer=ReserveOffer;
