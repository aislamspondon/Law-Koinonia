import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cover from "../../../assets/images/cover/1627845013074.jfif";
import fetchUserDetails from "../../../redux/thunk/fetchUserProfile";
import classes from "../../../Styles/ChildStyles/ProfileBodyStyle/ProfileBody.module.css";
import ProfileActivity from "./ProfileActivity";
import ProfileCaseAnalysis from "./ProfileCaseAnalysis";
import ProfilePost from "./ProfilePost";

function ProfileBody() {
  const dispatch = useDispatch();
  const [postsB, setPostsB] = useState(true);
  const [caseAnalyisisB, setcaseAnalysisB] = useState(false);
  const [activity, setActivityB] = useState(false);
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserDetails);
    }
  }, [dispatch, userInfo]);
  return (
    <div>
      <div
        style={{
          width: "785px",
          height: "435px",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <div className={classes.cover}>
          <img src={cover} alt="Cover" />
        </div>
        <div>
          <div style={{ margin: "30px 30px 20px" }}>
            <p
              style={{
                color: "RGBA(0, 0, 0, 0.9)",
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: "600",
              }}
            >
              {user.full_name}
            </p>
            <p
              style={{
                color: "RGBA(0, 0, 0, 0.9)",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "400",
              }}
            >
              {user.designation} at {user.court}
            </p>
            <p
              style={{
                color: "RGBA(0, 0, 0, 0.6)",
                fontSize: "14px",
                lineHeight: "17.5px",
                fontWeight: "400",
              }}
            >
              Bangladesh
            </p>
            <a
              href="/"
              style={{
                color: "#004182",
                fontSize: "14px",
                lineHeight: "17.5px",
                fontWeight: "600",
              }}
            >
              Contact Info
            </a>
            <div style={{ display: "flex" }}>
              <a
                href="/"
                style={{
                  color: "#004182",
                  fontSize: "14px",
                  lineHeight: "17.5px",
                  fontWeight: "600",
                }}
              >
                {user.followers_count} followers
              </a>
              <a
                href="/"
                style={{
                  color: "#004182",
                  fontSize: "14px",
                  lineHeight: "17.5px",
                  fontWeight: "600",
                  marginLeft: "25px",
                }}
              >
                {user.connection_count} connection
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className={classes.add_profile_section}>
              Add Profile Section
            </button>
            <button
              type="submit"
              style={{
                color: "#5E5E5E",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "600",
                padding: "5px 20px",
                margin: "10px 10px",
                borderRadius: "15px",
                border: "1px solid #5E5E5E",
              }}
              className={classes.profile_more}
            >
              More
            </button>
          </div>
        </div>
        <div className={classes.profilepic}>
          <img
            src={`http://127.0.0.1:8000${user.profile_pic}`}
            alt={user.username}
          />
        </div>
      </div>
      <div
        style={{
          width: "785px",
          height: "auto",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <ul style={{ display: "flex", padding: "25px", alignItems: "center" }}>
          <li
            className={
              postsB
                ? `${classes.actionButton} ${classes.active}`
                : `${classes.actionButton}`
            }
            onClick={() => {
              setPostsB(true);
              setcaseAnalysisB(false);
              setActivityB(false);
            }}
          >
            Your Posts
          </li>
          <li
            className={
              caseAnalyisisB
                ? `${classes.actionButton} ${classes.active}`
                : `${classes.actionButton}`
            }
            onClick={() => {
              setPostsB(false);
              setActivityB(false);
              setcaseAnalysisB(true);
            }}
          >
            Case Analysis
          </li>
          <li
            className={
              activity
                ? `${classes.actionButton} ${classes.active}`
                : `${classes.actionButton}`
            }
            onClick={() => {
              setPostsB(false);
              setcaseAnalysisB(false);
              setActivityB(true);
            }}
          >
            Activity
          </li>
        </ul>

        <hr />
        {postsB ? <ProfilePost title="Profile Post" /> : ""}
        {caseAnalyisisB ? <ProfileCaseAnalysis title="Case Analysis" /> : ""}
        {activity ? <ProfileActivity title="Activity" /> : ""}
      </div>
    </div>
  );
}

export default ProfileBody;
