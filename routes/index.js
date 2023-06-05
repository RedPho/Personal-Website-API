const express = require('express');
const router = express.Router();
const post_controller = require("../controllers/postController");
const comment_controller = require("../controllers/commentController");

//Posts
router.get('/posts', post_controller.posts_get);

router.post("/post", post_controller.new_post);

router.get('/post/:id', post_controller.post_get);

router.put('/post/:id', post_controller.post_put);

router.delete('/post/:id', post_controller.post_delete);



//Comments
router.get('/comments', comment_controller.comments_get);

router.get('/comment/:id', comment_controller.comment_get);

router.post('/comment', comment_controller.comment_post);

router.delete('/comment/:id', comment_controller.comment_delete);


module.exports = router;
