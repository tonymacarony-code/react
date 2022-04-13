import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={props.src} alt="" />
      </div>
      <div className={s.descriptionBlock}>ava+desc</div>
    </div>
  );
};
export default ProfileInfo;
