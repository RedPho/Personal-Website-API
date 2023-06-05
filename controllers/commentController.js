const Comment = require("../models/Comment");
const asyncHandler = require("express-async-handler");

exports.comments_get = asyncHandler(async(req, res, next) => {
  let comments = Comment.find({}).exec();
  res.json({comments: comments});
})

exports.comment_post = asyncHandler(async (req, res, next) => {
  res.json({ "username": req.body.username, "text": req.body.text });
});

exports.comment_get = asyncHandler(async(req, res, next) => {
  let comment = Comment.findById(req.params.id).exec();
  res.json({comment: comment});
})

exports.comment_delete = asyncHandler(async (req, res, next) => {
  res.json({"Deleted(will be deleted) comment id": req.params.id});
});