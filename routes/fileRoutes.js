const express = require("express")
const router = express.Router();
const {fileSaveToLocal, uploadImage, uploadVideo} = require("../controller/file")

router.post("/toLocal", fileSaveToLocal)
router.post("/image", uploadImage)
router.post("/video", uploadVideo)
module.exports = router