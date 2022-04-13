import { React } from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likesCount={p.likesCount}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuudmqKXeuASUBnJR1IgSC6FMYcUZWloDnJCKxQw9_w&s"
    />
  ));
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
