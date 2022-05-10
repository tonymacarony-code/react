import { createSelector } from "reselect";
const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getAllUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

export const getAllUsersSelector = (state) => {
  return getAllUsers(state).filter((u) => true);
};
