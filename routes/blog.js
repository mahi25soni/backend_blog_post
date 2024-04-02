const express = require("express")
const router = express.Router();
const {createPost, getOnePost, getPost, getAllComments} = require("../controller/post")
const {createComment} = require("../controller/comment")

router.post('/post/create/', createPost);
router.get("/post", getPost);
router.get("/post/:id/", getOnePost);
router.get("/post/comments/:post_id/", getAllComments);


router.post("/comment/create/", createComment);
// router.get("/comment/:post_id", allComments)


module.exports = router;