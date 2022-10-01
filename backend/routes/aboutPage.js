const { About,validateAbout } = require('../models/about');
const auth = require('../middleware/auth');
const access = require("../middleware/access");
const validation = require('../middleware/validation');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const fs = require('fs');
// HTTP GET
router.get('/', async (req, res) => {
    const about = await About.find();
    res.send(about);
});

// HTTP POST
router.post('/',[validation(validateAbout),auth,access,upload.single('file')] , async (req, res) => {

    const about = new About({
        title:req.body.title,
        subtitle:req.body.subtitle,
        brief:req.body.brief,
        image:{
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: req.file.mimetype
        }
    });
    await about.save();
    
    res.send(about);
   
});

// HTTP PUT
router.put('/:id', [validation(validateAbout),auth,access,upload.single('file')] , async (req, res) => {
    
    const about = await About.findByIdAndUpdate(req.params.id, { 
        title:req.body.title,
        subtitle:req.body.subtitle,
        brief:req.body.brief,
        image:{
            data: fs.readFileSync('uploads/' + req.file.filename),
            contentType: req.file.mimetype
        }
    }, { new: true });

    if (!about) return res.status(404).send('The about page was not found.');
    res.send(about);
});

// HTTP DELETE
router.delete('/:id',[auth,access], async (req, res) => {
    const about = await About.findByIdAndRemove(req.params.id);
    res.send(about);
});


module.exports = router;