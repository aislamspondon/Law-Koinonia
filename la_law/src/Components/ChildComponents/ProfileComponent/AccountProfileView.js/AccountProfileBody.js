import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cover from "../../../../assets/images/cover/1627845013074.jfif";
import fetchAddFeedLike from "../../../../redux/thunk/fetchAddFeedLike";
import fetchSingleUserProfile from "../../../../redux/thunk/fetchSingleUserProfile";
import fetchUserDetails from "../../../../redux/thunk/fetchUserProfile";
import classes from "../../../../Styles/ChildStyles/ProfileBodyStyle/ProfileBody.module.css";
import ProfileCaseAnalysis from "../ProfileCaseAnalysis";
import ProfileConnection from "../ProfileConnection";
import ProfileFollowers from "../ProfileFollowers";
import PublicProfilePost from "./PublicProfilePost";

export default function AccountProfileBody({ username }) {
  const dispatch = useDispatch();
  const [postsB, setPostsB] = useState(true);
  const [caseAnalyisisB, setcaseAnalysisB] = useState(false);
  const [followers, setFollowers] = useState(false);
  const [connection, setConnection] = useState(false);
  const singleUserProfile = useSelector((state) => state.singleUserProfile);
  const { user } = singleUserProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [follow, setFollow] = useState(true);
  //   const userProfile = useSelector((state) => state.userProfile);
  //   const { user: myprofile } = userProfile;
  //   const { following: myfollowing } = myprofile;
  //   console.log(myprofile, "This is myProfile");
  //   let follow_user = myfollowing?.map((follow) => follow.username);
  //   if (follow_user?.includes(username)) {
  //     setFollow(true);
  //     console.log("Run");
  //   }

  const followButtonHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAddFeedLike(username));
    setFollow((toggle) => !toggle);
  };
  //   console.log();

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchSingleUserProfile(username));
      dispatch(fetchUserDetails);
    }
  }, [dispatch, userInfo, username]);

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
            <button
              type="submit"
              className={classes.add_profile_section}
              onClick={followButtonHandler}
            >
              {follow ? (
                <div style={{ display: "flex" }}>
                  <i class="uil uil-plus"></i>
                  <p>Follow</p>
                </div>
              ) : (
                <div style={{ display: "flex" }}>
                  <p>UnFollow</p>
                </div>
              )}
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
              setFollowers(false);
              setConnection(false);
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
              setFollowers(false);
              setConnection(false);
              setcaseAnalysisB(true);
            }}
          >
            Case Analysis
          </li>
          <li
            className={
              followers
                ? `${classes.actionButton} ${classes.active}`
                : `${classes.actionButton}`
            }
            onClick={() => {
              setPostsB(false);
              setcaseAnalysisB(false);
              setFollowers(true);
              setConnection(false);
            }}
          >
            Followers
          </li>
          <li
            className={
              connection
                ? `${classes.actionButton} ${classes.active}`
                : `${classes.actionButton}`
            }
            onClick={() => {
              setPostsB(false);
              setcaseAnalysisB(false);
              setFollowers(false);
              setConnection(true);
            }}
          >
            Connection
          </li>
        </ul>

        <hr />
        {postsB ? (
          <PublicProfilePost title="Profile Post" username={username} />
        ) : (
          ""
        )}
        {caseAnalyisisB ? <ProfileCaseAnalysis title="Case Analysis" /> : ""}
        {followers ? (
          <ProfileFollowers title="Followers" data={user.followers} />
        ) : (
          ""
        )}
        {connection ? (
          <ProfileConnection title="Connection" data={user.connection} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
