import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cover from "../../../assets/images/cover/1627845013074.jfif";
import fetchAddFeedProfile from "../../../redux/thunk/fetchAddFeedProfileList";
import fetchCaseProfileView from "../../../redux/thunk/fetchCaseProfileView";
import fetchUserDetails from "../../../redux/thunk/fetchUserProfile";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/ShortProfile.module.css";
import CaseTitle from "./CaseTitle";
import Forums from "./Forums";
export default function ShortProfile() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const caseProfileView = useSelector((state) => state.caseProfileView);
  const { cases } = caseProfileView;

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserDetails);
      dispatch(fetchCaseProfileView);
      dispatch(fetchAddFeedProfile);
    }
  }, [dispatch, userInfo]);
  return (
    <>
      <div className={classes.short_profile}>
        <div className={classes.profile_details_info_home}>
          <div className={classes.cover_photo}>
            <img src={cover} alt="Cover" />
          </div>
          <div className={classes.profile_photo}>
            <img
              src={`http://127.0.0.1:8000${user.profile_pic}`}
              alt={user.username}
            />
          </div>
          <div className={classes.profile_bio}>
            <div className={classes.profile_name_home}>{user.full_name}</div>
            <div className={classes.current_work}>
              <span className={classes.position}>{user.designation}</span> at{" "}
              <span className={classes.organization}>{user.court}</span>
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
              {cases.length !== 0 ? (
                cases.map((data) => {
                  return <CaseTitle data={data} key={data._id} />;
                })
              ) : (
                <p
                  style={{
                    fontSize: "12px",
                    padding: "5px 10px",
                    color: "red",
                    fontWeight: "900",
                  }}
                >
                  EMPTY CASES (No Case Found)
                </p>
              )}
            </div>
            <div className={`${classes.show_details_div} ${classes.forum}`}>
              <div className={classes.show_details_div_title}>Forums</div>
              {user.groups.map((group) => {
                return <Forums key={group._id} forum={group.group_name} />;
              })}
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
