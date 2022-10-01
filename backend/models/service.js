const mongoose = require('mongoose');
const Joi=require('joi');

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:3,
        maxlength:50
    },
    points:[{
        type:String,
        required:true,
     
    }],
   image:{
    type: String,
    required:true,
}
    });
    const Service = mongoose.model("services",serviceSchema);
    function validate(service) {
      const schema = Joi.object({
        title: Joi.string().min(3).max(50),
        points:Joi.array(),
        image:Joi.string()
        
    });
    const result = schema.validate(service);
    return result;
    }
    exports.validate=validate;
      exports.Service = Service; 
   