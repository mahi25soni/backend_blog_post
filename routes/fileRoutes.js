const express = require("express")
const router = express.Router();
const {fileSaveToLocal} = require("../controller/file")

router.post("/toLocal", fileSaveToLocal)
module.exports = router