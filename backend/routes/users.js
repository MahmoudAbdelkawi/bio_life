const {User, validate} = require('../models/user');
const auth = require('../middleware/auth');
const validateUser = require('../middleware/validation');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const lodash = require('lodash');


router.get('/:id',auth,async(req,res)=>{
const user= await User.findById(req.params.id).populate('myOffers myReservations').select('-password');
res.send(user);
});

//register a new user
router.post("/",validateUser(validate),async(req,res)=>{

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');
  user = new User(lodash.pick(req.body, ['username', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.isAdmin=false;
  user.isSubAdmin=false;
  await user.save();
  res.send(user);
  });


  router.put('/',[auth,validateUser(validate)],async (req, res) => {
    const searchEmail = await User.findOne({email:req.body.email});
    if(searchEmail){
      //if user wouldn’t change email, check id of the user 
      //if it is the same restore the email and if not, so this is other’s email

      if(searchEmail._id.toString()===req.user._id.toString()){
        const salt = await bcrypt.genSalt(10);
        const user = await User.findByIdAndUpdate(_id=req.user._id,{
          email:req.body.email ||searchEmail.email,
          fname:req.body.fname || searchEmail.fname,
          lname:req.body.lname || searchEmail.lname,
          phoneNumber:req.body.phoneNumber || searchEmail.phoneNumber
        },{new:true})
        return res.send(user);
      }
      return res.status(404).send("Email is already found!");
    }
    if(!searchEmail){
      //if the user wants to change the email with new one
      const salt = await bcrypt.genSalt(10);
        const user = await User.findByIdAndUpdate(_id=req.user._id,{
         email:req.body.email,
         fname:req.body.fname || searchEmail.fname,
         lname:req.body.lname || searchEmail.lname,
         phoneNumber:req.body.phoneNumber || searchEmail.phoneNumber
        },{new:true})
       return res.send(user);
    }
});





module.exports = router;
