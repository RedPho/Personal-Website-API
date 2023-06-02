const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  post_text: { type: String, required: true },
  timestamp: { type: Date, default: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT) },
  image_url: { type: String },
  author: { type: Schema.types.ObjectId, ref: "Author" },
  comments: [{ type: Schema.types.ObjectId, ref: "Comment" }],
  published: { type: Boolean, default: false }
});

PostSchema.virtual("url").get(function () {
  return `/blog/post/${this._id}`;
});

// Export model
module.exports = mongoose.model("Post", PostSchema);
