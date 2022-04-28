import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "02f5be01-91fe-45cf-be84-ba58edb7adc4",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(({ data }) => data);
};
export const unFollow = (id) => {
  return instance.delete(`follow/${id}`).then(({ data }) => data);
};
export const toFollow = (id) => {
  return instance.post(`follow/${id}`).then(({ data }) => data);
};
export const authMe = () => {
  return instance.get(`auth/me`).then(({ data }) => data);
};
export const getUser = (userId) => {
  return instance.get(`profile/${userId}`).then(({ data }) => data);
};
