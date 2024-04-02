const mongoose = require("mongoose");



const blogModel = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        max : [50, "Acceding the word limit"]
    },
    body : {
        type : String,
        required : true
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Likes",
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comments"
    }]
})
const Blog = mongoose.model("Blog", blogModel)

const commentModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Blog"
    },
    commented_by : String,
    body : String
})
const Comments = mongoose.model("Comments", commentModel)


const likeModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Blog"
    },
    liked_by : String
})
const Likes = mongoose.model("Likes", likeModel);


module.exports = {
    Blog,
    Likes,
    Comments
}

