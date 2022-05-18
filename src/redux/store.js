import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let store = {
  _state: {
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
      newMessageBody: "",
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
  },
  _subscriber() {
    console.log("ok");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    // {type : ""} ВСЕГДА БУДЕТ ИМЕТЬ ТИП
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._subscriber(this._state);
  },
};

export default store;
