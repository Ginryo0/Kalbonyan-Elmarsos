exports.getPosts = (req, res, next) => {
  // Status codes are impo !! cuz client will need to know what happened
  // 200 = sucess
  res
    .status(200)
    .json({ posts: [{ title: 'First Post', content: 'This is a post' }] });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(req.body);
  // create post in Db
  // 201 -> success + resource was created
  res.status(201).json({
    message: 'Post Created Successfully!',
    post: { id: Date.now(), title: title, content: content },
  });
};
