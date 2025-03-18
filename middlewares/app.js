const express = require("express");
const cors = require("cors");
const postRouter = require("../routers/post_router");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/post", postRouter);
app.get("*", (req, res, next) => {
  res.send("Port succesfully runnig!!!");
});
module.exports = app;
