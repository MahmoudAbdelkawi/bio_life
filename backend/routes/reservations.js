const { Reserve,validate} = require("../models/reservation");
const validation=require('../middleware/validation');
const auth = require("../middleware/auth");
const access = require("../middleware/access");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

//function to get limited reservations to appear on dashboard home and website as brief
router.get('/limit',[auth,access],async(req,res)=>{
  let createdDate=new Date();
  createdDate.setDate(createdDate.getDate()-1)
  const reserves = await Reserve.find({status:'pending','date':{$gte:createdDate}}).populate('department doctor').sort('-createdAt').limit(2);
  res.send(reserves);
 });
router.get('/',[auth,access],async(req,res)=>{
  let createdDate=new Date();
  createdDate.setDate(createdDate.getDate()-1)
  const reserves = await Reserve.find({status:'pending','date':{$gte:createdDate}}).populate('department doctor');
  res.send(reserves);
 });

//post reserve for visitors only according to a department
router.post("/",validation(validate),async (req, res) => {
  const res_number =Math.floor(100000 + Math.random() * 900000);
  const reserve = await new Reserve({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    res_number:res_number,
    date: req.body.date,
    phoneNumber: req.body.phoneNumber,
    department:req.body.department
  });
  await reserve.save();
  return res.send(reserve);
});

//post reserve for visitors only according to a doctor
router.post("/doctor",validation(validate),async (req, res) => {
  const res_number =Math.floor(100000 + Math.random() * 900000);
  let reserve = await new Reserve({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    res_number:res_number,
    date: req.body.date,
    phoneNumber: req.body.phoneNumber,
    doctor:req.body.doctor
  });
  await reserve.save();
  res.send(reserve);
});

//accept or decline by admins
router.put('/:id',[auth,access],async(req,res)=>{
  const reserve = await Reserve.findById(req.params.id);
  reserve.status=req.body.status;
  await reserve.save();
  res.send(reserve);
  
  });


module.exports = router;
