import React, { Component } from "react";

import s from "../MyPosts/MyPosts.module.css";
import AddMyPost from "./AddMyPosts";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likesCount={p.likesCount}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuudmqKXeuASUBnJR1IgSC6FMYcUZWloDnJCKxQw9_w&s"
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <AddMyPost addPost={props.addPost} />
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
