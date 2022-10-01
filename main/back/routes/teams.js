const {Depart} = require('../models/department');
const {Member} = require('../models/member');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
  const departs=await Depart.find();

  let members;
  let length = departs.length;
  let teams=[];
  let temp=[];
  for(let index=0;index<length;index++){
    let d=departs[index]._id.toString();
   members = await Member.find({department:d}).populate('department');
  temp[index]=members.length!==0?teams.push(members):'';
  }
  res.send(teams);
 });


module.exports = router;
