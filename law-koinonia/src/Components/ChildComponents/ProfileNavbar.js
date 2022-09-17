import React, { useState } from "react";

import classes from "../../Styles/ChildStyles/ProfileNavbar.module.css";
import ProfileBox from "./ProfileBox/ProfileBox";

export default function ProfileNavbar(props) {
  const [toggle, setToggle] = useState(false);
  function toggleClick() {
    setToggle((toggle) => !toggle);
  }
  let activeProfileIcon = toggle ? "ProfileNavbar_active__3oLbe" : "";
  let activeProfileBox = toggle ? "ProfileBox_active__oov9z" : "";
  return (
    <>
      <div className={`${classes.nav_profile} ${props.toggleProfileMenu}`}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <a href="#message" className={classes.nav_profile_link}>
              <i class="bx bxs-message-rounded-detail"></i>
            </a>
          </li>
          <li className={classes.nav_item}>
            <a href="#notification" className={classes.nav_profile_link}>
              <i class="bx bxs-bell"></i>
            </a>
          </li>
          <li className={classes.nav_item} onClick={toggleClick}>
            <a
              href="#profile"
              className={`${classes.nav_profile_details} ${activeProfileIcon}`}
            >
              <i class="bx bxs-down-arrow"></i>
            </a>
          </li>
        </ul>
      </div>
      <ProfileBox activeProfileBox={activeProfileBox} />
    </>
  );
}
