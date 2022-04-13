import { React } from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.src} alt="" />
      {props.message}
      <div>
        <span>likes: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
