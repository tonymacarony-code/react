import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.214xh&resize=600:*"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava+desc</div>
    </div>
  );
};
export default ProfileInfo;
