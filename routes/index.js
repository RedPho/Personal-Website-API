const express = require('express');
const router = express.Router();
const post_controller = require("../controllers/postController");
const author_controller = require("../controllers/authorController");
const comment_controller = require("../controllers/commentController");


//Posts

router.get('/posts', post_controller.posts_get);

router.post("/new_post", post_controller.new_post);

router.get('/post/:id', post_controller.post_get);

router.put('/post/:id', post_controller.post_put);


//Comments

router.get('/comments', comment_controller.comments_get);

router.get('/comment/:id', comment_controller.comment_get);

router.post('/new_comment', comment_controller.comment_post);

router.delete('/comment/:id', comment_controller.comment_delete);


//Author





module.exports = router;
