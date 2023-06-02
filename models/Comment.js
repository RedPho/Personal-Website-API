const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT) },
})

module.exports = mongoose.model("Comment", CommentSchema);