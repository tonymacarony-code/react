import { rerenderEntireTree } from "./../render";
let state = {
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: "Tony",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
      },
      {
        id: 2,
        name: "Aleksi",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
      },
      {
        id: 3,
        name: "Yasen",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
      },
      {
        id: 4,
        name: "S@nya",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png",
      },
    ],
    messages: [
      { id: 1, message: "Спасибо Леша" },
      { id: 2, message: "С тебя 5700!" },
      { id: 3, message: "gre korm suka" },
      { id: 4, message: "dolboeby blayt'" },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: "Спасибо Lexa", likesCount: 12 },
      { id: 2, message: "С тебя 5200!", likesCount: 3 },
      { id: 3, message: "Yasen" },
      { id: 4, message: "S@nya" },
    ],
    newPostText: "",
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
