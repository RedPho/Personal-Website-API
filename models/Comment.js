const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  timestamp: { type: Date, default: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT) },
})

PostSchema.virtual("url").get(function () {
  return `/blog/comment/${this._id}`;
});

module.exports = mongoose.model("Comment", CommentSchema);