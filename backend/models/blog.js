const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
Joi.objectId= require('joi-objectid')(Joi);
const Blog = mongoose.model('Blogs', new mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  subject: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 2000
  },
  author: {
    type: String
  },
  image: {
   type:String,
   required:true,
  },
  department:{
   type:ObjectId,
   ref:'departments'
  },
  likes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  }],
 type:{
  type:String,
  required:true
 }
  
}, { timestamps: true }));
function validate(blog) {
  const schema = Joi.object({
    title:Joi.string().min(5).max(255),
    subject:Joi.string().min(5).max(2000),
    author:Joi.string(),
    image:Joi.string(),
    department:Joi.objectId(),
    type:Joi.string()
});
const result = schema.validate(blog);
return result;
}
exports.validate=validate;

exports.Blog = Blog;
