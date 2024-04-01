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
        ref : likeModel,
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : commentModel
    }]
})
const Blog = mongoose.model("Blog", blogModel);

const commentModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : blogModel
    },
    commented_by : string,
    body : String
})
const Comments = mongoose.model("Comments", commentModel);


const likeModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : blogModel
    },
    liked_by : string
})
const Likes = mongoose.model("Likes", likeModel);


module.exports = {
    Blog,
    Comments,
    Likes
}
