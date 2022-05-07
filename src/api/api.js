import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "02f5be01-91fe-45cf-be84-ba58edb7adc4",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(({ data }) => data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(({ data }) => data);
  },
};
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(({ data }) => data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then(({ data }) => data);
  },
  logout() {
    return instance.delete(`auth/login`).then(({ data }) => data);
  },
};

export const singleUserAPI = {
  getUser(userId) {
    return instance.get(`profile/${userId}`).then(({ data }) => data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(({ data }) => data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then(({ data }) => data);
  },
};
