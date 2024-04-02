const {Blog, Comments, Likes} = require("../models/blogModel")

const createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const new_blog = await Blog.create({
            title : title, 
            body : body
        })
    
        res.status(500).json({
            Message : "Data added successfully",
            data : new_blog
        })
    }
    catch(err) {
        console.error(err)
        res.send(200).json({
            Message : "Couldn't add data",
            data : err.message
        })
    }
}

const getPost = async (req, res) => {
    try{
        const all_blogs = await Blog.find({})
        res.status(500).json({
            Message : "These are all blogs",
            data : all_blogs
        })
    }
    catch(err) {
        console.error(err)
        res.send(200).json({
            Message : "Couldn't add data",
            data : err.message
        })
    }
}

const getOnePost = async(req, res) => {
    try {
        const id = req.params.id;
        const one_blog = await Blog.findById(id).exec();
        if(!one_blog){
            res.status(500).json({
                Message : "No such blog exists"
            }) 
        }
        res.status(500).json({
            Message : "Your asked blog",
            data : one_blog
        })
    }
    catch(err) {
        console.error(err)
        res.send(200).json({
            Message : "Couldn't add data",
            data : err.message
        })
    }
}

const getAllComments = async(req, res) => {
    try{
        const blog_id = req.params.post_id;
        const allComments = await Blog.findById(blog_id).populate('comments').exec()

        const ans = allComments.comments.map(e => {
            console.log(e)
            return e.body;
        }) 

        res.status(500).json({
            Message : "All Comments",
            data : ans
        })
    }
    catch(err) {
        console.error(err)
        res.send(200).json({
            Message : "Couldn't add data",
            data : err.message
        })
    }
}


module.exports = {
    createPost,
    getPost,
    getOnePost,
    getAllComments
}