const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
Joi.objectId= require('joi-objectid')(Joi);
const memberSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
},
email:{
  type:String,
  required:true,
  minlength:10,
  maxlength:255,
},
image: {
  type:String,
  required:true
},
position:{
    type:String,
    required:true,
    minlength:3,
    maxlength:255
},
department:{
  type: ObjectId,
  ref:'departments',
  required:true
},
paragraph:{
        type:String,
        required:true,
        minlength:6,
        maxlength:255
    },
fromTime:{
  type:String
},
toTime:{
  type:String
},
fromDay:{
  type:String
},
toDay:{
  type:String
}
});

const Member = mongoose.model("member",memberSchema);
function validate(member) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50),
    email:Joi.string().email().min(10).max(255),
    position:Joi.string().min(3).max(50),
    paragraph:Joi.string().min(6).max(255),
   fromTime:Joi.string(),
   toTime:Joi.string(),
   fromDay:Joi.string(),
   fromDay:Joi.string(),
   department:Joi.objectId(),
   image:Joi.string()
});
const result = schema.validate(member);
return result;
}
exports.validate=validate;
  
  exports.Member = Member; 
 

