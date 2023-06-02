const Author = require("../models/Author");
const asyncHandler = require("express-async-handler");

exports.new_author_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: New Author form");
});

exports.new_author_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: New Author post");
});