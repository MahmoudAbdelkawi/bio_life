const Joi = require('joi');
const mongoose = require('mongoose');

const departSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
}
});

const Depart = mongoose.model("departments",departSchema);
function validateDepart(depart) {
    const schema = {
      name: Joi.string().min(3).max(50)
    };
  
    return Joi.validate(depart, schema);
  }
  
  exports.departSchema=departSchema;
  exports.Depart = Depart; 
  exports.validateDepart = validateDepart;

