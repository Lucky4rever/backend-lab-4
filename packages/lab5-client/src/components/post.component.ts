import Post from "../types/post.type";

const PostComponent = (post: Post) => {
  return `
    <div class="form-box list-box">
      <span class="form-left-side">
        <label class="list-label">${post.title}</label>
        <label for="">${post.article}</label>
        <label for="">${post.date.getDate()}</label>
      </span>
      <span class="form-right-side">
        <button class="button icon-box">
          <img
            class="icons"
            src="images/rubbish-bin-svgrepo-com.svg"
            alt=""
          />
        </button>
        <label>${post.author}</label>
      </span>
    </div>
  `;
};

export default PostComponent;
