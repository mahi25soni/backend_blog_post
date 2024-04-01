const mongoose = require("mongoose");

const userModel  = new mongoose.Schema({
    name : String,

})

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

const commentModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : blogModel
    },
    commented_by : {
        type : mongoose.Schema.Types.ObjectId,
        ref : userModel
    },
    body : String
})

const likeModel = new mongoose.Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : blogModel
    },
    liked_by : {
        type : mongoose.Schema.Types.ObjectId,
        ref : userModel
    }
})