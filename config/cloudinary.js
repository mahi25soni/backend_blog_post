const cloudinary = require("cloudinary").v2;
require("dotenv").config()

const connectCloudinary = () => {
    try{
        cloudinary.config({
            cloud_name : process.env.Cloud_name,
            api_key :  process.env.Cloud_Api_key, 
            api_secret : process.env.Cloud_Secret_key
        })
    }
    catch(error) {
        console.error(error);
    }
}

module.exports = connectCloudinary;