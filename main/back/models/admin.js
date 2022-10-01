const Joi = require('joi');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    maxlength:255
},
password:{
    type:String,
    required:true,
    minlength:8,
    maxlength:1024,
},
isSuperAdmin:Boolean,
isAdmin:Boolean,
isSubAdmin:Boolean

}, { timestamps: true });

userSchema.methods.generateAuthToken=function(){
    const token= jwt.sign({_id:this._id,isSuperAdmin:this.isSuperAdmin,isAdmin:this.isAdmin,isSubAdmin:this.isSubAdmin,name:this.name,email:this.email},process.env.JWT_KEY);
    return token;
}
const Admin = mongoose.model("admins",userSchema);

function validate(admin) {
  const schema = Joi.object({
    name:Joi.string().min(3).max(50),
    email:Joi.string().email().min(10).max(255),
    password:Joi.string().min(8).max(1024),
    isAdmin:Joi.bool(),
    isSubAdmin:Joi.bool()
});
const result = schema.validate(admin);
return result;
}
exports.validate=validate;

exports.Admin = Admin; 


