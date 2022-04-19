import React, { Component, useEffect } from "react";
import styles from "./users.module.css";
const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Tony",
        followed: false,
        status: "4m0",
        location: { city: "Kyiv", country: "Ukraine" },
        photoUrl:
          "https://lh6.googleusercontent.com/-zf77AH9gQlQ/AAAAAAAAAAI/AAAAAAAAAOg/ibEB3DvkyE0/photo.jpg?sz=256",
      },
      {
        id: 2,
        fullName: "Tony",
        followed: false,
        status: "4m0",
        location: { city: "Kyiv", country: "Ukraine" },
        photoUrl:
          "https://lh6.googleusercontent.com/-zf77AH9gQlQ/AAAAAAAAAAI/AAAAAAAAAOg/ibEB3DvkyE0/photo.jpg?sz=256",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div> {u.location.city} </div>
              <div> {u.location.country} </div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
