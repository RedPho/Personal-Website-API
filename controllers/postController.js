const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

exports.new_post = asyncHandler(async (req, res, next) => {
  res.json({title: req.body.title, text: req.body.text, image_url: req.body.image_url});
});

exports.posts_get = asyncHandler(async (req, res, next) => {
  let posts = Post.find({}).populate("comments").populate("author").exec();
  res.json({posts: posts});
});

exports.post_get = asyncHandler(async (req, res, next) => {
  let post = Post.find({_id: req.params.id}).populate("comments").populate("author").exec();
  res.json({post: post});
});

//Update post
exports.post_put = asyncHandler(async (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, {title: req.body.title, text: req.body.text}).exec();
  res.json({"Post id": req.params.id, "New Title": req.body.title, "New Text": req.body.text});
});