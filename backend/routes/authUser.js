const Joi = require('joi');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const {Admin} = require('../models/admin');
const router = express.Router();

//login user
router.post('/',async (req, res) => {
  const { error } = validate(req.body); //check the validation of input data
  if (error) return res.status(400).send(error.details[0].message);
 let token;
  let user = await User.findOne({ email: req.body.email }); // if email is exist
  if(user){
    const validPassword = await bcrypt.compare(req.body.password, user.password); //compare password
    if (!validPassword) return res.status(400).send('Invalid email or password.');
    token=user.generateAuthToken();
  }
  let admin = await Admin.findOne({ email: req.body.email }); // if email is exist
  if(admin){
    const validPassword = await bcrypt.compare(req.body.password, admin.password); //compare password
    if (!validPassword) return res.status(400).send('Invalid email or password.');
    token=admin.generateAuthToken();
  }
  res.send(token);

});

//validation function
function validate(req)  {
    const schema = { 
      email: Joi.string().min(10).max(255).email(),
      password: Joi.string().min(6).max(255)
    };
    return Joi.validate(req, schema);
  }
  module.exports = router; 