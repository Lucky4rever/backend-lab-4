import { html } from 'lit-html';
import { getAllPosts } from '../utils/fetching';
import Post from '../types/post.type';
import PostComponent from '../components/post.component';

const PostsPage = () => {
  let posts: Post[] = [];

  getAllPosts().then((result) => {
    console.log(result);
    posts = result;
  });

  return html`
    <section>
      <h1 class="heading-list">POSTS:</h1>

      <main>
        <ul>
          ${posts.map((post) => PostComponent(post))}
        </ul>
      </main>
    </section>
  `;
};

export default PostsPage;
