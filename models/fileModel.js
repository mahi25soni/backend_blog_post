const mongoose = require("mongoose")

const fileSchema = new mongoose.Schema({
    name : {
        type : String
    },
    imageUrl : {
        type : String
    },
    tag : {
        type : String
    },
    email : {
        type : String
    },
})

module.exports = new mongoose.model("Files" , fileSchema)