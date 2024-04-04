const express = require("express")
const router = express.Router();
const multer = require("multer")
const upload = multer({
    dest : "uploads/",
    onError : function(err, next) {
        console.log('error', err)
        next(err)
    }
})

const {fileSaveToLocal, uploadImage, uploadVideo, multerImage, multerVideo} = require("../controller/file")


router.post("/toLocal", fileSaveToLocal)
router.post("/image", uploadImage)
router.post("/video", uploadVideo)

// Uploading using multer

// 1. Test single Image
// router.post("/multerImage", upload.single('image_file'), multerImage)

// 2. Test multiple files
// router.post("/multerImage", upload.array('image_file'), multerImage)

// 3. Test different labelled images

const midFunction = upload.fields([{name : "posts", maxCount : 3}, {name : "profilePic" ,maxCount : 1}])

router.post("/multerImage", midFunction, multerImage )
router.post("/multerVideo", multerVideo)


module.exports = router