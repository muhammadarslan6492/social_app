import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "post must have a title"],
    minlength: 4,
    maxlength: 150,
  },
  body: {
    type: String,
    required: [true, "post must have a body"],
    minlength: 4,
    maxlength: 500,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
