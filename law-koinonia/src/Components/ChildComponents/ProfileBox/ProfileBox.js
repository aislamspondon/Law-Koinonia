import React from "react";
import classes from "../../../Styles/ChildStyles/ProfileBox.module.css";
import ProfileBoxDetails from "./ProfileBoxDetails";
import ProfileBoxFooter from "./ProfileBoxFooter";

export default function ProfileBox(props) {
  return (
    <>
      <div className={`${classes.profile_box} ${props.activeProfileBox}`}>
        <ProfileBoxDetails />
        <ProfileBoxFooter />
      </div>
    </>
  );
}
