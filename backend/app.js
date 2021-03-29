const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    { id: "a12345", title: "First server-side post", content: "backend test" },
    { id: "b12345", title: "Second server-side post", content: "backend test" },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
