const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

exports.new_post = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    res.json({ title: req.body.title, text: req.body.text, image_url: req.body.image_url });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});

exports.posts_get = asyncHandler(async (req, res, next) => {
  let posts = Post.find({}).populate("comments").populate("author").exec();
  res.json({ posts: posts });
});

exports.post_get = asyncHandler(async (req, res, next) => {
  let post = Post.find({ _id: req.params.id }).populate("comments").populate("author").exec();
  res.json({ post: post });
});

//Update post
exports.post_put = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    Post.findByIdAndUpdate(req.params.id, { title: req.body.title, text: req.body.text, published: req.body.published }).exec();
    res.json({ "Post id": req.params.id, "New Title": req.body.title, "New Text": req.body.text });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});


exports.post_delete = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    Post.findByIdAndDelete(req.params.id).exec();
    res.json({"Deleted post id": req.params.id});
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});