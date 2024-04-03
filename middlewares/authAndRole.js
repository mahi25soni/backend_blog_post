const jwt = require("jsonwebtoken")
require("dotenv").config();

const auth = async (req, res, next) => {
    try{
        // Getting token from req body rn
        const token = req.body.token
        if(!token) {
            return res.status(404).json({
                message : "Enter the authentication token!"
            })
        }

        jwt.verify(token, process.env.JWT_PRIVATE_KEY, function(err, result) {
            if(err) {
                return res.status(401).json({
                    message : "Invalid token!"
                })
            }
            else {
                req.user = result;
                next();
            }
        })
    } catch(error) {
        return res.status(500).json({
            message : "Internal Server Error while authentication"
        })
    }
}


const isStudent = async (req , res, next) => {
    try {
        if(req.user.role != "student"){
            return res.status(401).json({
                message : "Not a authorized student"
            })
        }
        else{
            next();
        }
    } catch(error) {
        return res.status(500).json({
            message : "Internal Server Error while student authorization"
        })   
    }
}

const isTeacher = async (req , res, next) => {
    try {
        if(req.user.role != "teacher"){
            return res.status(401).json({
                message : "Not a authorized teacher"
            })
        }
        else{
            next();
        }
    } catch(error) {
        return res.status(500).json({
            message : "Internal Server Error while teacher authorization"
        })   
    }
}

module.exports = {
    auth,
    isStudent,
    isTeacher
}