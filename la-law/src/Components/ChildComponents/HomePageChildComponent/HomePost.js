import React, { useState } from "react";
import profile from "../../../assets/images/profile_pic/243801350_3298072810479798_5198757960072350324_n.jpg";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";

import PostingPage from "./PostingPage";
export default function HomePost() {
  const [postPageActive, setPostPageActive] = useState(false);
  const closeBtn = (action) => {
    setPostPageActive(action);
  };
  return (
    <>
      <div className={classes.home_post}>
        <div className={classes.input_post_field}>
          <div className={classes.profile_post_image}>
            <img src={profile} alt="Profile" />
          </div>
          <button
            className={classes.profile_post_input}
            onClick={() => setPostPageActive(true)}
          >
            Start a post
          </button>
        </div>
        <div className={classes.assets_field}>
          <div className={`${classes.asset_field} ${classes.photo_field}`}>
            <div className={`${classes.asset_icon} ${classes.photo_icon}`}>
              <i class="bx bx-image"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Photo</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.video_field}`}>
            <div className={`${classes.asset_icon} ${classes.video_icon}`}>
              <i class="bx bxl-youtube"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Video</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.event_field}`}>
            <div className={`${classes.asset_icon} ${classes.event_icon}`}>
              <i class="bx bx-calendar"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Event</p>
            </div>
          </div>
          <div className={`${classes.asset_field} ${classes.article_field}`}>
            <div className={`${classes.asset_icon} ${classes.article_icon}`}>
              <i class="bx bxs-notepad"></i>
            </div>
            <div className={classes.asset_title}>
              <p>Write article</p>
            </div>
          </div>
        </div>
        {postPageActive ? <PostingPage closeBtn={closeBtn} /> : null}
      </div>
    </>
  );
}
