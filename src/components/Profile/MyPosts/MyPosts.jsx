import { React } from "react";
import s from "../MyPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Спасибо Lexa", likesCount: 12 },
    { id: 2, message: "С тебя 5200!", likesCount: 3 },
    { id: 3, message: "Yasen" },
    { id: 4, message: "S@nya" },
  ];
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
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
