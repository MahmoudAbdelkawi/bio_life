const {Offer,validate} = require('../models/offer');
const validation=require('../middleware/validation');
const auth = require('../middleware/auth');
const admin=require('../middleware/admin');
const express = require('express');
const router = express.Router();

//function to get limited offers to appear on dashboard home and website as brief
router.get('/limit',async (req,res)=>{
    const offers = await Offer.find({ "expiredate": { $gte : new Date()}   }).populate('department').sort('expiredate').limit(2);
    return res.send(offers);
    });

router.get('/:id',async (req,res)=>{
    const offer = await Offer.findById(req.params.id).populate('department');
    res.send(offer);
    });

router.get('/',async (req,res)=>{
const offers = await Offer.find({ "expiredate": { $gte : new Date()}   }).populate('department').sort('expiredate');
return res.send(offers);
});

router.post("/",[auth,admin,validation(validate)],async(req,res)=>{

    const offer = new Offer(req.body);
    await offer.save();
    return res.send(offer);
    });


router.delete("/:id",[auth,admin],async(req,res)=>{
    const offer = await Offer.findByIdAndRemove(req.params.id);

});

module.exports = router;