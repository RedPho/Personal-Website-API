const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
})

module.exports = mongoose.model("Author", AuthorSchema);