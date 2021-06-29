import Post from "../model/postModel.js";

const getPost = async (req, res) => {
  // res.send("this is the getPost ROUTE");

  const post = await Post.find();
  if (!post) {
    return res.status(404).json({
      status: false,
      message: "post not found",
    });
  }

  res.status(200).json({
    status: true,
    post: {
      post,
    },
  });
};

//create new post

const newPost = async (req, res) => {
  const post = await Post.create(req.body);
  if (!post) {
    return res.status(400).json({
      status: false,
      message: "post not created",
    });
  }

  res.status(201).json({
    status: true,
    created_post: {
      post,
    },
  });
};

export { getPost, newPost };
