const Joi = require('joi');
const bcrypt = require('bcrypt');
const {Admin} = require('../models/admin');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//login admin
router.post('/',async (req, res) => {
  const { error } = validate(req.body); //check the validation of input data
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email }); // if email is exist
  if (!admin) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, admin.password); //compare password
  if (!validPassword) return res.status(400).send('Invalid email or password.');
  const token = admin.generateAuthToken();
  res.send(token);
});


//validation function
function validate(req)  {
  const schema = Joi.object({
    email: Joi.string().min(10).max(255).email(),
    password: Joi.string().min(6).max(255)
  });
  const result = schema.validate(req);
  return result;
}
  module.exports = router; 