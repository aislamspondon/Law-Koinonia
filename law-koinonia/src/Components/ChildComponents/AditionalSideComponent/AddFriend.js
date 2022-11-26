import React from "react";
import asraful from "../../../assets/images/fnds_photo/Asraful.jpg";
import classes from "../../../Styles/ChildStyles/AditionalPageClildStyle/AddFriends.module.css";
export default function AddFriend() {
  return (
    <>
      <div className={classes.add_profile_template}>
        <a href="/" className={classes.add_profile_info}>
          <div className={classes.add_profile_photo}>
            <img src={asraful} alt="Sender Person" />
          </div>
          <div className={classes.add_profile_name_and_work}>
            <div className={classes.add_profile_name}>
              <p>Asraful Islam Spondon</p>
            </div>
            <div className={classes.add_profile_current_work}>
              <p>CEO at S2E Solution</p>
            </div>
            <button className={classes.follow}>
              <i class="uil uil-plus"></i>
              <p>Follow</p>
            </button>
          </div>
        </a>
      </div>
    </>
  );
}
