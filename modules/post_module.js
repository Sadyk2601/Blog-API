const { default: mongoose } = require("mongoose");

let postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date },
});
let post = mongoose.model("posts", postSchema);
module.exports = post;
