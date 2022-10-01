const Joi = require('joi');
const mongoose = require('mongoose');

const Comment = mongoose.model('comments', new mongoose.Schema({

    user: {
        type: new mongoose.Schema({
            username: {
                type: String,
                required: true,
                minlength: 3,
                maxlength: 50
            }
        })
    },
    blog: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                trim: true,
                minlength: 5,
                maxlength: 255
            }
        })
    },
    comment: {
        type: String,
        required: true,
        min: 1,
        max: 300
    }
}, { timestamps: true }));


function validateComment(comment) {
    const schema = Joi.object({
        comment: Joi.string().min(1).max(300)
    });
    const result = schema.validate(comment);
    return result;
}
exports.Comment = Comment;
exports.validateComment = validateComment;