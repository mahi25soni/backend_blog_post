const Files  = require("../models/fileModel")
const cloudinary = require("cloudinary")


const fileSaveToLocal = async(req, res) => {
    try{

        const data = req.files.your_file
        const path = __dirname + "/files/" + Date.now() + `.${data.name.split(".")[1]}`;
        data.mv(path, (err) => {
            if(err) {
                console.log("File upload error is ", err);
            }
        })
        res.status(200).json({
            message : "chal raha hai abhi toh"
        })
    }
    catch(errro) {
        return res.status(500).json({
            message : "Error in local file uploading"
        })
    }
}



async function uploadImageToCloud (file, quality)  {
    const options = {
        folder : "Babbar",
        resource_type : "auto",
    }

    return await cloudinary.uploader.upload(file.tempFilePath,"Babbar", options); // I don't know why but dono baar folder declare karna padd raha hai yaha pei
}
const uploadImage = async(req, res) => {
    try{
        const {name, tag, email} = req.body;
        const currentFile = req.files.file

        if(!currentFile) {
            return res.status(404).json({
                success : false,
                message : "Haven't recieved any file"          
            })
        }
        const ext = currentFile.name.split(".")[1];
        const allowedExt = ["jpeg","png","jpg"]
        if(!allowedExt.includes(ext)){
            return res.status(415).json({
                success : false,
                message : "File type not supported!"
            })
        }


        console.log(currentFile)
        const upload_image = await uploadImageToCloud(currentFile, "30");

        console.log(upload_image)

        // const new_file = await Files.create({
        //     name, tag, email, imageUrl : upload_image.secure_url
        // }); // While creating, don't use exec(), just use await

        console.log(new_file)
        res.status(200).json({
            success : true,
            message : "Image upload successfully!"
            // data : new_file
        })
    }
    catch(error) {
        return res.status(500).json({
            success : false,
            message : "Internal server error while uploading image"
        })
    }
}

const uploadVideo = async(req, res) => {
    try{
        const {name, tag, email} = req.body;
        const currentFile = req.files.file

        if(!currentFile) {
            return res.status(404).json({
                success : false,
                message : "Haven't recieved any file"          
            })
        }
        const ext = currentFile.name.split(".")[1];
        const allowedExt = ["mp4","mov"]
        if(!allowedExt.includes(ext)){
            return res.status(415).json({
                success : false,
                message : "File type not supported!"
            })
        }


        // console.log(currentFile)
        const upload_image = await uploadImageToCloud(currentFile);

        console.log(uploadImage)

        const new_file = await Files.create({
            name, tag, email, imageUrl : upload_image.secure_url
        }); // While creating, don't use exec(), just use await

        console.log(new_file)
        res.status(200).json({
            success : true,
            message : "Image upload successfully!",
            data : new_file
        })  
    }
    catch(error) {
        return res.status(500).json({
            success : false,
            message : "Internal server error while uploading video"
        })
    } 
}

module.exports = {
    fileSaveToLocal,
    uploadImage,
    uploadVideo
}