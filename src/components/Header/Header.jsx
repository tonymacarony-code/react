import { React } from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/46/IMG_Academy_Logo.jpg"
        alt=""
      />
    </header>
  );
};

export default Header;
