import { React } from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuudmqKXeuASUBnJR1IgSC6FMYcUZWloDnJCKxQw9_w&s"
        alt=""
      />
      {props.name}
      <div>
        <span>likes: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
