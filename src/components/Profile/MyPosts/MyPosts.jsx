import { React } from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post name="Tony" likesCount="5" />
        <Post name="Macarony" likesCount="3" />
        <Post name="Peperony" />
        <Post name="Mascarpony" />
      </div>
    </div>
  );
};

export default MyPosts;
