const {ReserveOffer,validate} = require('../models/reserveOffer');
const {User} = require('../models/user');
const validation=require('../middleware/validation');
const auth = require('../middleware/auth');
const access = require('../middleware/access');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

//function to get limited offers reservations to appear on user profile
router.get('/limit',auth,async(req,res)=>{
  let user= await User.findById(req.user._id);
  let arr = user.myOffers;
  let reserve=[];
  let counter= arr.length-1;
 for(let i=0;i<3;i++){
 reserve[i]=await ReserveOffer.findById(arr[counter]).populate('offer');
 counter--;
 if(counter<0)
 break;
 }
 const result = arr.length===0?arr:reserve;
 res.send(result);
});

router.get('/',[auth,access],async(req,res)=>{
  const reserves = await ReserveOffer.find().populate('user offer').select('-user');
  res.send(reserves);
 });

//post reserve offer to users only
router.post('/',[auth,validation(validate)],async (req,res)=>{
 const offer_number =Math.floor(100000 + Math.random() * 900000);
  let reserve = await new ReserveOffer({
    fname: req.body.fname,
    lname: req.body.lname,
 email:req.body.email,
 offer_number:offer_number,
 phoneNumber:req.body.phoneNumber,
 offer:req.body.offer,
 user:req.user._id
  });
  await reserve.save();
  res.send(reserve);
  });

  //if appointment the offer is accepted then the list of offers reservations to this user is increased
  router.put('/:id',[auth,access],async(req,res)=>{
    const reserve = await ReserveOffer.findById(req.params.id);
    if(!reserve.user){
      reserve.status=req.body.status;
      await reserve.save();
     
    }else{
      const user = await User.findById(reserve.user);
    if(!user) return res.status(400).send('Invalid user');
    reserve.status=req.body.status;
    if(reserve.status === 'confirmed'){
      user.myOffers.push(req.params.id);
    }
    await user.save();
    reserve.user = user;
    await reserve.save();
    }
    
    res.send(reserve);
    });

module.exports=router;
