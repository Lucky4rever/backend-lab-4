import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const PostModel = mongoose.model('Post', postSchema);

export { PostModel };
