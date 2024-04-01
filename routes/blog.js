const express = require("express")
const router = express.Router();


router.post('post/create/', createPost);
router.get("post", getPost);
router.get("post/:id/", getOnePost);

module.exports = router;