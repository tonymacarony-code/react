import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});
export const getAuth = () => {
  return (dispatch) => {
    return authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  console.log("+", email, password, rememberMe);
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuth());
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
