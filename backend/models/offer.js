const Joi=require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
Joi.objectId= require('joi-objectid')(Joi);
const offerSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    points:[{
        type:String,
        required:true
    }],
    image:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    expiredate:{
      type: Date,
      required: true
  },
  department:{
    type:ObjectId,
    ref:'departments'
  }
  });
    const Offer = mongoose.model("offers",offerSchema);
    function validate(offer) {
      const schema = Joi.object({
        title: Joi.string().min(3).max(50),
        price:Joi.number(),
        expiredate:Joi.date(),
        department:Joi.objectId(),
        points:Joi.array(),
        image:Joi.string()
        
    });
    const result = schema.validate(offer);
    return result;
    }
    exports.validate=validate;
      exports.Offer = Offer; 
  