const { Reserve,validate} = require("../models/reservation");
const {User} =require('../models/user');
const auth = require("../middleware/auth");
const validation=require('../middleware/validation');
const access = require("../middleware/access");
const express = require("express");
const router = express.Router();
const _ = require("lodash");


//function to get limited reservations to appear on user profile
router.get('/limit',auth,async(req,res)=>{
  let user= await User.findById(req.user._id);
  let arr = user.myReservations;
  let reserve=[];
  let counter= arr.length-1;
 for(let i=0;i<3;i++){
 reserve[i]=await Reserve.findById(arr[counter]).populate('department doctor');
 counter--;
 if(counter<0)
 break;
 }
 const result = arr.length===0?arr:reserve;

 res.send(result);
});

router.get('/',[auth,access],async(req,res)=>{
 const reserves = await Reserve.find().populate('department doctor');
 res.send(reserves);
});

//post reserve to users only according to a department
router.post("/",[ auth,validation(validate)], async (req, res) => {
  const res_number =Math.floor(100000 + Math.random() * 900000);
  const reserve = await new Reserve({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    res_number:res_number,
    date: req.body.date,
    phoneNumber: req.body.phoneNumber,
    department:req.body.department,
    user:req.user._id
  });
  await reserve.save();
  return res.send(reserve);
});

//post reserve to users only according to a doctor
router.post("/doctor", [auth,validation(validate)], async (req, res) => {
  const res_number =Math.floor(100000 + Math.random() * 900000);
  let reserve = await new Reserve({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    res_number:res_number,
    date: req.body.date,
    phoneNumber: req.body.phoneNumber,
    doctor:req.body.doctor,
    user:req.user._id
  });
  await reserve.save();
  res.send(reserve);
});

//to accept or decline the reserve by any kind of admins
router.put('/:id',[auth,access],async(req,res)=>{
  const reserve = await Reserve.findById(req.params.id);
  if(!reserve.user){
    reserve.status=req.body.status;
    await reserve.save();
   
  }else{
    const user = await User.findById(reserve.user);
  if(!user) return res.status(400).send('Invalid user');
  reserve.status=req.body.status;
  if(reserve.status === 'confirmed'){
    user.myReservations.push(req.params.id);//if appointment is accepted then the list of reservations to this user is increased
  }
  await user.save();
  reserve.user = user;
  await reserve.save();
  }
  
  res.send(reserve);
  });

module.exports = router;
