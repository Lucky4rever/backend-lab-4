import Post from "../types/post.type";

class AllPosts {
  private static posts: Post[];

  static setPosts(posts: Post[]) {
    this.posts = posts;
  }

  static getPosts() {
    return this.posts;
  }
}

export default AllPosts;
