const fileSaveToLocal = async(req, res) => {
    try{

        const data = req.files.your_file
        if(!data) {
            return res.status(404).json({
                message : "No file found"
            })
        }
        
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

module.exports = {
    fileSaveToLocal
}