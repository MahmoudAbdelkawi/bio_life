const {ReserveOffer,validate} = require('../models/reserveOffer');
const validation=require('../middleware/validation');
const auth = require('../middleware/auth');
const access = require('../middleware/access');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

//function to get limited offers reservations to appear on dashboard home and website as brief
router.get('/limit',[auth,access],async(req,res)=>{
  const reserves = await ReserveOffer.find({status:'pending'}).populate('offer').limit(2);
  res.send(reserves);
 });

router.get('/',[auth,access],async(req,res)=>{
  const reserves = await ReserveOffer.find({status:'pending'}).populate('offer');
  res.send(reserves);
 });

//reserve offer by visitors only
router.post('/',validation(validate),async (req,res)=>{
 const offer_number =Math.floor(100000 + Math.random() * 900000);
  let reserve = await new ReserveOffer({
    fname: req.body.fname,
    lname: req.body.lname,
 email:req.body.email,
 offer_number:offer_number,
 phoneNumber:req.body.phoneNumber,
 offer:req.body.offer
  });
  await reserve.save();
  res.send(reserve);
  });

  //accept or decline the offer reservation
  router.put('/:id',[auth,access],async(req,res)=>{
    const reserve = await ReserveOffer.findById(req.params.id);
  reserve.status=req.body.status;
  await reserve.save();
  res.send(reserve);
  });

module.exports=router;
