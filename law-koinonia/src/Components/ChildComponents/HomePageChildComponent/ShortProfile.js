import React, { useState } from "react";
import cover from "../../../assets/images/cover/1627845013074.jfif";
import profile from "../../../assets/images/profile_pic/243801350_3298072810479798_5198757960072350324_n.jpg";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/ShortProfile.module.css";
import CaseTitle from "./CaseTitle";
import Forums from "./Forums";
export default function ShortProfile() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={classes.short_profile}>
        <div className={classes.profile_details_info_home}>
          <div className={classes.cover_photo}>
            <img src={cover} alt="Cover" />
          </div>
          <div className={classes.profile_photo}>
            <img src={profile} alt="Profile Pic " />
          </div>
          <div className={classes.profile_bio}>
            <div className={classes.profile_name_home}>Jahidul Islam</div>
            <div className={classes.current_work}>
              <span className={classes.position}>Student</span> at{" "}
              <span className={classes.organization}>
                Ranada Prasad Saha University
              </span>
              <br />
              <br />
            </div>
          </div>
        </div>
        {show ? null : (
          <button className={classes.show_more} onClick={() => setShow(true)}>
            <p>Show more</p>
            <i class="bx bx-chevron-down nav_link"></i>
          </button>
        )}
        {show ? (
          <div className={classes.show_details}>
            <div
              className={`${classes.show_details_div} ${classes.recent_cases}`}
            >
              <div className={classes.show_details_div_title}>Recent Case</div>
              <CaseTitle />
              <CaseTitle />
              <CaseTitle />
            </div>
            <div className={`${classes.show_details_div} ${classes.forum}`}>
              <div className={classes.show_details_div_title}>Forums</div>
              <Forums forum="Bandar Law Forum" />
              <Forums forum="Narayanganj Law Forum" />
              <Forums forum="3 Start Law Forum" />
            </div>
          </div>
        ) : null}
        {show ? (
          <button className={classes.show_less} onClick={() => setShow(false)}>
            <p>Show less</p>
            <i class="bx bx-chevron-up nav_link"></i>
          </button>
        ) : null}
      </div>
    </>
  );
}
