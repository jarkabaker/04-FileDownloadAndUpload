exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is my first post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  const fs = require("fs");

  fs.writeFileSync(title + ".txt", content);

  res.status(201).json({
    message: "File created successfully!",
    post: { id: new Date().toISOString(), title: title },
  });
};
