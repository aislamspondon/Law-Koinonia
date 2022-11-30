import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchAddFeedLike from "../../../redux/thunk/fetchAddFeedLike";
import classes from "../../../Styles/ChildStyles/AditionalPageClildStyle/AddFriends.module.css";
export default function AddFriend({ addUserProfile }) {
  let navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(true);
  const followButtonHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAddFeedLike(addUserProfile.username));
    setFollow((toggle) => !toggle);
  };
  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo, navigate]);
  return (
    <>
      <div className={classes.add_profile_template}>
        <div className={classes.add_profile_info}>
          <div className={classes.add_profile_photo}>
            <img
              src={`http://127.0.0.1:8000${addUserProfile.profile_pic}`}
              alt="Sender Person"
            />
          </div>
          <div className={classes.add_profile_name_and_work}>
            <div className={classes.add_profile_name}>
              <p>{addUserProfile.full_name}</p>
            </div>
            <div className={classes.add_profile_current_work}>
              <p>
                {addUserProfile.designation} at {addUserProfile.court}
              </p>
            </div>
            <button
              className={classes.follow}
              type="submit"
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
          </div>
        </div>
      </div>
    </>
  );
}
