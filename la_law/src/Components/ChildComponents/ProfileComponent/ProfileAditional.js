import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchAddFeedProfile from "../../../redux/thunk/fetchAddFeedProfileList";
import classes from "../../../Styles/ChildStyles/ProfileBodyStyle/ProfileAditional.module.css";
import AddFriend from "../AditionalSideComponent/AddFriend";

function ProfileAditional() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const addFeedProfileFollow = useSelector(
    (state) => state.addFeedProfileFollow
  );
  const { success } = addFeedProfileFollow;
  const addFeedProfileList = useSelector((state) => state.addFeedProfileList);
  const { addUserProfiles } = addFeedProfileList;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchAddFeedProfile);
    }
  }, [dispatch, userInfo, success]);
  return (
    <div>
      <div
        style={{
          width: "325px",
          height: "130px",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <Link to="/myprofile/edit/">
            <p className={classes.adition_item}>Edit Public Profile & Url</p>
          </Link>
          <div
            style={{
              fontSize: "18px",
              width: "25px",
              height: "25px",
              textAlign: "center",
              borderRadius: "50%",
              color: "#ffffff",
              backgroundColor: "#797979",
            }}
          >
            <i class="uil uil-question"></i>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <p className={classes.adition_item}>Add Profile In Public Site</p>
          <div
            style={{
              fontSize: "18px",
              width: "25px",
              height: "25px",
              textAlign: "center",
              borderRadius: "50%",
              color: "#ffffff",
              backgroundColor: "#797979",
            }}
          >
            <i class="uil uil-question"></i>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "325px",
          height: "auto",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
        }}
      >
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: "600",
            padding: "20px",
          }}
        >
          Please also viewed
        </p>

        <div style={{ padding: "10px" }}>
          {addUserProfiles.map((addUserProfile) => {
            return (
              <AddFriend
                addUserProfile={addUserProfile}
                key={addUserProfile.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileAditional;
