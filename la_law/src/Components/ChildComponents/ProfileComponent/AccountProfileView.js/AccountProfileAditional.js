import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import adv from "../../../../assets/images/adver/adv.png";
import fetchAddFeedProfile from "../../../../redux/thunk/fetchAddFeedProfileList";
import AddFriend from "../../AditionalSideComponent/AddFriend";

export default function AccountProfileAditional() {
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
          height: "280px",
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px",
          borderRadius: "12px",
          overflow: "hidden",
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
          <img src={adv} alt="adv" style={{ width: "300px", height: "250" }} />
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
