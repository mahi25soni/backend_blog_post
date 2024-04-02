const {Blog, Comments, Likes} = require("../models/blogModel")

const createComment = async(req, res) => {
    try{
        const {post_id, commented_by, body} = req.body;

        const new_comment = await Comments.create({post_id, commented_by, body});

        // console.log("The new comments is ", new_comment)

        await Blog.findByIdAndUpdate(post_id, {$push : {comments : new_comment._id}}).exec();

        res.status(500).json({
            Message : "Comment posted",
            data : new_comment
        })
    }
    catch(err) {
        res.status(200).json({
            Message : "There's some error",
            data : err.message
        })
    }
}

module.exports = {
    createComment
}