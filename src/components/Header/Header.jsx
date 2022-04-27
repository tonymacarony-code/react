import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/46/IMG_Academy_Logo.jpg"
        alt=""
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
