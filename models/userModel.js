const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        enum : ["student","teacher","admin","visitor"]
    }
})
const User = new mongoose.model("User", userSchema)

module.exports = User