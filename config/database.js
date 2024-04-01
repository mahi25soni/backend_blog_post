const mongoose = require("mongoose")
require("dotenv").config();


const dbConnect = () => {
    mongoose.connect(process.env.Basic_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("Connected to mongo db server")
    })
    .catch((error) => {
        console.log("Issue while connecting to database")
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;