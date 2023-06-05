const Comment = require("../models/Comment");
const asyncHandler = require("express-async-handler");

exports.comments_get = asyncHandler(async (req, res, next) => {
  let comments = await Comment.find({}).exec();
  res.json({ comments: comments });
})

exports.comment_post = asyncHandler(async (req, res, next) => {
  res.json({ "username": req.body.username, "text": req.body.text });
});

exports.comment_get = asyncHandler(async (req, res, next) => {
  let comment = await Comment.findById(req.params.id).exec();
  res.json({ comment: comment });
})

exports.comment_delete = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    await Comment.findByIdAndDelete(req.params.id).exec();
    res.json({ "Deleted comment id": req.params.id });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});