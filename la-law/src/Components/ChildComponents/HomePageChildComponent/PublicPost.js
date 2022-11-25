import React from "react";
import senderphoto from "../../../assets/images/profile_pic/243801350_3298072810479798_5198757960072350324_n.jpg";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/PublicPost.module.css";
export default function PublicPost(props) {
  return (
    <>
      <div className={classes.post_template}>
        <div className={classes.post_sender_title}>
          <div className={classes.post_sender_info}>
            <div className={classes.sender_photo}>
              <img src={senderphoto} alt="Sender Person" />
            </div>
            <div className={classes.sender_name_and_work}>
              <div className={classes.post_sender_name}>
                <h5>{props.data.name}</h5>
              </div>
              <div className={classes.post_sender_current_work}>
                <p>
                  {props.data.desig} at {props.data.company}
                </p>
              </div>
            </div>
          </div>
          <div className={classes.post_option}>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
          </div>
        </div>
        <div className={classes.sender_post}>
          <p>{props.data.post}</p>
        </div>
        <br />
        <div className={classes.sender_file}>
          {props.data.image && props.data.image}
        </div>
      </div>
    </>
  );
}
