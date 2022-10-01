const {Member,validate} = require('../models/member');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validation=require('../middleware/validation');
const express = require('express');
const router = express.Router();

//function to get limited members to appear on dashboard home and website as brief
router.get('/limit',async (req, res) => {
  const members = await Member.find().populate('department').sort('name').limit(2);
  res.send(members);
});

router.get('/:id',async (req, res) => {
  const member = await Member.findById(req.params.id).populate('department');
  res.send(member);

});
router.get('/',async (req, res) => {
  const members = await Member.find().populate('department').sort('name');
  res.send(members);
});

router.post("/",[auth,admin],async(req,res)=>{
  const member = new Member(req.body);
  await member.save();
  res.send(member);
  });
  
router.delete('/:id',[auth,admin],async (req, res) => {
  const member= await Member.findByIdAndRemove(req.params.id);
});


module.exports = router;
