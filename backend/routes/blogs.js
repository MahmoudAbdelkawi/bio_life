const express = require('express');
const router = express.Router();
const validation=require('../middleware/validation');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const { Blog,validate} = require('../models/blog');
const { Comment, validateComment } = require('../models/comment');

// HTTP GET

//function to get limited blogs to appear on dashboard home and website as brief
router.get('/limit', async (req, res) => {
    const blogs = await Blog.find({type:'blog'}).populate('department').sort('-createdAt').limit(3);
    res.send(blogs);
});

router.get('/', async (req, res) => {
    const blogs = await Blog.find({type:'blog'}).populate('department').sort('-createdAt')
    res.send(blogs);
});

//specific blog
router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate('department');
    res.send(blog);
});

//all comments of a specific blog
router.get('/:id/comment', async (req, res) => {
    const comments = await Comment.find({ 'blog._id': req.params.id}).sort('-createdAt');
    res.send(comments);
});

//check if user has liked to a specific blog
router.get('/like/:id',auth,async (req,res)=>{
    const user = await Blog.findOne({likes:req.user._id,_id:req.params.id});
   if(!user) return res.send('nothing');
   res.send(user);
});

// HTTP POST

//post a blog
router.post('/', [auth,admin,validation(validate)], async (req, res) => {
    const blog =
        new Blog(req.body);
    blog.isBlog=true;
    await blog.save();
    res.send(blog);

});

//post a comment
router.post('/:id/comment', [auth,validation(validateComment)], async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    const comment = await new Comment({
        user: {
            _id: req.user._id,
            username: req.user.username
        },
        blog: {
            _id: req.params.id,
            title: blog.title
        },
        comment: req.body.comment
    });

    await comment.save();
    res.send(comment);
});

//like the blog by edit the blog and increase the likes total
router.put('/:id/like', auth, async (req, res) => {
    let user = await Blog.findOne({likes:req.user._id,_id:req.params.id});
    if(!user){
        user = await Blog.findByIdAndUpdate(req.params.id, {
            $push: { likes: req.user._id }
    }, { new: true });
   }

   return res.send(`${user.likes.length}`); 
});

// HTTP DELETE blog
router.delete('/:id',[auth,admin], async (req, res) => {
    const blog = await Blog.findByIdAndRemove(req.params.id);
});
module.exports = router;