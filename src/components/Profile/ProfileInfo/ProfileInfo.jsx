import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src={profile.photos} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.profileImg}
          src={
            profile.photos.large
              ? profile.photos.large
              : "https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.214xh&resize=600:*"
          }
          alt=""
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
