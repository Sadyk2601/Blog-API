const Post = require("../modules/post_module");

let findAllPosts = async (req, res, next) => {
  let posts = await Post.find();
  res.status(200).json({ name: "Posts", posts });
};

let addPost = async (req, res, next) => {
  let data = req.body;
  let post = await Post.create({ ...data, createdAt: new Date(Date().now) });
  await post.save();
  res.status(200).json({ name: "Post", post });
};
