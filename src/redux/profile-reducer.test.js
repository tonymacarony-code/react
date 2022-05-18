import React from "react";
import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
let state = {
  posts: [
    { id: 1, message: "Спасибо Lexa", likesCount: 12 },
    { id: 2, message: "С тебя 5200!", likesCount: 3 },
    { id: 3, message: "Yasen" },
    { id: 4, message: "S@nya" },
  ],
};
test("length of posts should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("lalalalalall");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});
test("message lalalal", () => {
  // 1. test data
  let action = addPostActionCreator("lalalalalall");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[2].message).toBe("Yasen");
});
test("length after delete of messages should be decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});
