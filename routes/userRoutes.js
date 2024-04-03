const express = require("express")
const router = express.Router();
const { SignUp, logIn } = require("../controller/user")

router.post("/signup/", SignUp);
router.post("/login/", logIn)

const {auth, isStudent, isTeacher} = require("../middlewares/authAndRole")
router.get("/checkauth", auth, (req, res) => {
    res.send("You are an authentic user")
})
router.get("/student", auth, isStudent, (req, res) => {
    res.send("You are an authorized student")
})
router.get("/teacher", auth, isTeacher, (req, res) => {
    res.send("You are an authorized teacher")
})
module.exports = router;