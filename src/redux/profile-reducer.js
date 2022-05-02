import { singleUserAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Спасибо Lexa", likesCount: 12 },
    { id: 2, message: "С тебя 5200!", likesCount: 3 },
    { id: 3, message: "Yasen" },
    { id: 4, message: "S@nya" },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getUserProfile = (userId) => {
  return (dispatch) => {
    singleUserAPI.getUser(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    singleUserAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    singleUserAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
