const {Service,validate} = require('../models/service');
const validation=require('../middleware/validation');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();

//function to get limited services to appear on dashboard home and website as brief
router.get('/limit',async (req,res)=>{
    const services = await Service.find().sort('name').sort('-createdAt').limit(2);
    return res.send(services);
    });
    
router.get('/',async (req,res)=>{
const services = await Service.find().sort('name');
return res.send(services);
});

router.post("/",[auth,admin,validation(validate)],async(req,res)=>{
    const service = new Service(req.body);
    await service.save();
     res.send(service);
    });


router.delete("/:id",[auth,admin],async(req,res)=>{
    const service = await Service.findByIdAndRemove(req.params.id);
});

module.exports = router;