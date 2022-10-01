const {Admin,validate} = require('../models/admin');
const {User} = require('../models/user');
const superAdmin = require('../middleware/superAdmin');
const admin = require('../middleware/admin');
const auth = require('../middleware/auth');
const validation=require('../middleware/validation');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const lodash = require('lodash');

//register a new user
router.post("/",[auth,superAdmin,validation(validate)],async(req,res)=>{

  let user = await Admin.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');
  user = new Admin(lodash.pick(req.body, [ 'name','email', 'password','isAdmin','isSubAdmin']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.isSuperAdmin=false;
  await user.save();
  res.send(user);
  });


//function to get limited users to appear on dashboard home as brief
router.get('/users/limit',[auth,admin],async (req, res) => {
  const users = await User.find().sort('-createdAt').select('-password').limit(10);
  res.send(users);
});

//see all users
router.get('/users',[auth,admin],async (req, res) => {
  const users = await User.find().sort('name').select('-password');
  res.send(users);
});


//see all admins
router.get('/',[auth,admin],async (req, res) => {
    const admins = await Admin.find({isSuperAdmin:false}).sort('name').select('-password');
    res.send(admins);
  });
  
    //delete user
    router.delete('/user/:id',[auth,admin],async (req, res) => {
      const user = await User.findByIdAndRemove(req.params.id);
      res.send(user);
    });
  //delete accounts except super admin
  router.delete('/:id',[auth,admin],async (req, res) => {
    const admin = await Admin.findByIdAndRemove(req.params.id);
    res.send(admin);
  });
  
 
  module.exports = router;