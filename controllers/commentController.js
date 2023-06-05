const Comment = require("../models/Comment");
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

exports.comments_get = asyncHandler(async (req, res, next) => {
  let comments = await Comment.find({}).exec();
  res.json({ comments: comments });
})

exports.comment_post = asyncHandler(async (req, res, next) => {
  let comment = new Comment({ "username": req.body.username, "text": req.body.text, "post": req.body.post_id });
  let post = await Post.findById(req.body.post_id).exec();
  post.comments.push(comment._id);
  await post.save();
  await comment.save();
  res.json({ created: comment });
});

exports.comment_get = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id).exec();
  res.json({ comment: comment });
})

exports.comment_delete = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    let comment = await Comment.findById(req.params.id).exec();
    await Comment.findByIdAndDelete(req.params.id).exec();
    await Post.findByIdAndUpdate(comment.post, {$pull: { comments: comment._id }});
    res.json({ "Deleted comment id": req.params.id });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});