import { Post } from '../models/index.js';

export default class PostService {
  async getPostById(id) {
    return await Post.findById(id);
  }

  async createPost(postData) {
    return await Post.create(postData);
  }

  async updatePost(id, newData) {
    return await Post.findByIdAndUpdate(id, newData, { new: true });
  }

  async deletePost(id) {
    return await Post.findByIdAndDelete(id);
  }

  async getAllPosts() {
    return await Post.find();
  }
}
