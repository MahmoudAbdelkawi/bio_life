const Joi = require('joi');
const mongoose = require('mongoose');


const About = mongoose.model('about', new mongoose.Schema({

    title: {
        type: String,
        required: true,
        min: 1,
        max: 255
    }, subtitle: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    brief: {
        type: String,
        required: true,
        min: 1,
        max: 1000
    },
    image:{
        data:Buffer,
        contentType:String
    }

}, { timestamps: true }));


function validateAbout(about) {
    const schema = Joi.object({
        title: Joi.string().min(1).max(300),
        subtitle: Joi.string().min(1).max(300),
        brief: Joi.string().min(1).max(1000)
    });
    const result = schema.validate(about);
    return result;
}

exports.About = About;
exports.validateAbout = validateAbout;