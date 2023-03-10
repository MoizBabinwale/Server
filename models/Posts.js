import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String, // add a title field
  tags: String, // add a description field
  image: String,
  // userPosted: { type: String, required: "Post must have an author"},
  // userId: { type: String},
  createdAt: {
    type: Date,
    default: Date.now // add a createdAt field with default value of current date/time
  }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
