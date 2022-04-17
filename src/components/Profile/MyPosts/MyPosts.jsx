import React, { Component } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux//profile-reducer";
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

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
