import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAddFeedProfile from "../../../redux/thunk/fetchAddFeedProfileList";
import classes from "../../../Styles/Pages/ManageMyNetwork.module.css";
import AddProfileBox from "../AddProfileBox";
function PendingInvitation() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const addFeedProfileList = useSelector((state) => state.addFeedProfileList);
  const { addUserProfiles } = addFeedProfileList;
  const addFeedProfileFollow = useSelector(
    (state) => state.addFeedProfileFollow
  );
  const { success } = addFeedProfileFollow;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchAddFeedProfile);
    }
  }, [dispatch, userInfo, success]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          backgroundColor: "#ffffff",
          padding: "10px 15px",
          borderRadius: "12px",
          margin: "30px 20px",
        }}
      >
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "400",
          }}
        >
          No Pending Invitaions
        </p>
        <button className={classes.button}>Manage</button>
      </div>

      <div
        style={{
          width: "80%",
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          padding: "10px 15px",
          borderRadius: "12px",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "900px",
          }}
        >
          <p
            style={{
              color: "RGBA(0, 0, 0, 0.9)",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
            }}
          >
            You can follow them
          </p>
          <button className={classes.button}>See all</button>
        </div>
        <div style={{ margin: "15px" }}>
          {addUserProfiles.map((addUserProfile) => {
            return (
              <AddProfileBox
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

export default PendingInvitation;
