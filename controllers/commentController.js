const Comment = require("../models/Comment");
const asyncHandler = require("express-async-handler");

exports.new_comment_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: New Comment post");
});