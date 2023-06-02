const express = require('express');
const router = express.Router();
const post_controller = require("../controllers/postController");
const author_controller = require("../controllers/authorController");
const comment_controller = require("../controllers/commentController");


router.get('/posts', post_controller.posts_get);

router.post("/new_post", post_controller.new_post);

module.exports = router;
