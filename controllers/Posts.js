import Post from '../models/Posts.js';
import mongoose from 'mongoose';
export const postImage = async (req, res) => {
  const { title, tags, base64 } = req.body;
  const post = new Post({
    title,
    tags,
    image: base64,
  });

  try {
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
export const getImage = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).send('Invalid ID');
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send('Post not found');
    }

    res.set('Content-Type', post.image.contentType);
    res.send(post.image.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};