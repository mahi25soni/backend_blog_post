const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const SignUp = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

        const user = await User.findOne({email : email});
        if(user) {
            res.status(409).json({
                message : "User already exists!"
            })
        }

        const new_pass = await bcrypt.hash(password, 10);

        const new_user = await User.create({
            name, email, password : new_pass, role
        })

        res.status(200).json({
            message : "New user created!",
            data : new_user
        })
    } catch(err) {
        res.status(500).json({
            message : "Error while creating user"
        })
    }
}

const logIn = async(req, res) => {
    try{
        const {email, password} = req.body;

        // Email aur password dono honne chahiye ye toh frontend se dekh sakte hai

        let user = await User.findOne({email : email}).exec();

        if(!user) {
            return res.status(404).json({ // return lagana zruri hai, warna ye aage wale code ki taraf badhega
                message : "This user doesn't exists!"
            })
        }

        bcrypt.compare(password, user.password, function(err, result) {
            if(result) {
                const payload = {
                    name : user.name,
                    email : user.email,
                    role : user.role
                }

                const token = jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {
                    expiresIn : "2h"
                })

                const options = {
                    expires : new Date( Date.now() + 3*34*60*60*1000), // millisecons, 1 sec = 1000 milis
                    httpOnly : true
                }
                res.cookie("mahi_token", token, options).json({
                    message : "Logged in successfully!",
                    data : user
                })
            }
            else{
                res.status(401).json({
                    message : "Wrong password!"
                })
            }
        })

    } catch(err) {
        res.status(500).json({
            message : "Error while logging in!"
        })
    }
}


module.exports = {
    SignUp,
    logIn
}