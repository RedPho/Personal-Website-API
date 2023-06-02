const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

exports.new_post = asyncHandler(async (req, res, next) => {
  res.json({title: req.body.title, text: req.body.text, image_url: req.body.image_url});
});

exports.posts_get = asyncHandler(async (req, res, next) => {
  let posts = Post.find({}).populate("comments").populate("author").exec();
  res.json({"posts": posts});
});