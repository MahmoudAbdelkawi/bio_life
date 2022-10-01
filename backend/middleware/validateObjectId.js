const mongoose = require('mongoose');
    //this middleware function to check if id is valid
module.exports = function(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) 
    return res.status(404).send('Invalid Id');
    next();
}