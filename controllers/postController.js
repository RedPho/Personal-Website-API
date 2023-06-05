const Post = require("../models/Post");
const Comment = require("../models/Comment");
const asyncHandler = require("express-async-handler");

exports.new_post = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    let post = new Post({title: req.body.title, text: req.body.text, image_url: req.body.image_url});
    await post.save();
    res.json({ created: post });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});

exports.posts_get = asyncHandler(async (req, res, next) => {
  let posts = await Post.find({}).populate("comments").exec();
  res.json({ posts: posts });
});

exports.post_get = asyncHandler(async (req, res, next) => {
  let post = await Post.find({ _id: req.params.id }).populate("comments").exec();
  res.json({ post: post });
});

//Update post
exports.post_put = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    await Post.findByIdAndUpdate(req.params.id, { title: req.body.title, text: req.body.text, published: req.body.published }).exec();
    res.json({ "Post id": req.params.id, "New Title": req.body.title, "New Text": req.body.text });
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});


exports.post_delete = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    await Comment.deleteMany({post: req.params.id}).exec();
    await Post.findByIdAndDelete(req.params.id).exec();
    res.json({"Deleted post id": req.params.id});
  }
  else {
    res.json({ "error": "Wrong key." });
  }
});