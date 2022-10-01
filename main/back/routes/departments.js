const {Depart, validateDepart} = require('../models/department');
const auth = require('../middleware/auth');
const validation = require('../middleware/validation');
const admin = require('../middleware/admin');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


router.get('/',async (req,res)=>{
  const departs = await Depart.find().sort('name');
  return res.send(departs);
  });
  
  router.get('/:id',async (req,res)=>{
      const departs = await Depart.findById({_id:req.params.id}).sort('name');
      return res.send(departs);
      });
      
router.post("/",[auth,admin,validation(validateDepart)],async(req,res)=>{
const depart = new Depart({
    name:req.body.name
});
await depart.save();
return res.send(depart);
});


router.put("/:id",[auth,admin,validation(validateDepart)],async (req,res)=>{
    const departId = await Depart.findById({_id:req.params.id});
    if(!departId) return res.status(404).send("This depart is not available yet!");

    const depart = await Depart.findByIdAndUpdate(req.params.id,{
      name:req.body.name
    
    },{new:true});
    return res.send(depart);
});

router.delete("/:id",[auth,admin],async(req,res)=>{
    const depart = await Depart.findByIdAndRemove(req.params.id);
  if (!depart) return res.status(404).send('The depart with the given ID was not found.');
  return res.send(depart);
});

    module.exports = router;