const express = require("express")
const bodyParser = require("body-parser")
const BlogRoutes = require("./routes/blog")
const userRoutes=  require("./routes/userRoutes")
const dbConnect = require("./config/database")


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.use("/api/v1/", BlogRoutes)
app.use("/api/v1/user/", userRoutes)

app.get("/", (req, res)=> {
    res.send("Welcome to the home page")
})

dbConnect();

app.listen(3000, ()=> {
    console.log("Yaa this is working bro");
})