import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAddFeedProfile from "../../../redux/thunk/fetchAddFeedProfileList";
import classes from "../../../Styles/ChildStyles/AditionalPageClildStyle/AddFriends.module.css";
import AddFriend from "./AddFriend";
export default function AddFriends() {
  const dispatch = useDispatch();
  const addFeedProfileFollow = useSelector(
    (state) => state.addFeedProfileFollow
  );
  const { success } = addFeedProfileFollow;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const addFeedProfileList = useSelector((state) => state.addFeedProfileList);
  const { addUserProfiles } = addFeedProfileList;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchAddFeedProfile);
    }
  }, [dispatch, userInfo, success]);
  return (
    <>
      <div className={classes.add_feed}>
        <div className={classes.add_feed_title}>
          <h2>Add to your feed</h2>
          <i class="bx bxs-info-square"></i>
        </div>
        {addUserProfiles.map((addUserProfile) => {
          return (
            <AddFriend
              addUserProfile={addUserProfile}
              key={addUserProfile.id}
            />
          );
        })}

        {/* <div class="add_profile_template">
          <a href="#" class="add_profile_info">
            <div class="add_profile_photo">
              <img src="./asset/image/fnds_photo/anu.jpg" alt="Sender Person" />
            </div>
            <div class="add_profile_name_and_work">
              <div class="add_profile_name">
                <p>Arafat Anu</p>
              </div>
              <div class="add_profile_current_work">
                <p>Marketing Manager at GrameenPhone</p>
              </div>
              <button class="follow">
                <i class="uil uil-plus"></i>
                <p>Follow</p>
              </button>
            </div>
          </a>
        </div>
        <div class="add_profile_template">
          <a href="#" class="add_profile_info">
            <div class="add_profile_photo">
              <img
                src="./asset/image/fnds_photo/mahadi.jpg"
                alt="Sender Person"
              />
            </div>
            <div class="add_profile_name_and_work">
              <div class="add_profile_name">
                <p>Mahadi Hasan</p>
              </div>
              <div class="add_profile_current_work">
                <p>CTO at S2E Solution</p>
              </div>
              <button class="follow">
                <i class="uil uil-plus"></i>
                <p>Follow</p>
              </button>
            </div>
          </a>
        </div>
        <div class="add_profile_template">
          <a href="#" class="add_profile_info">
            <div class="add_profile_photo">
              <img
                src="./asset/image/fnds_photo/120174983_682808275927233_7781449651177258671_n.jpg"
                alt="Sender Person"
              />
            </div>
            <div class="add_profile_name_and_work">
              <div class="add_profile_name">
                <p>Md Robin Hossain</p>
              </div>
              <div class="add_profile_current_work">
                <p>CEO at Mirzapur Gold Lab Ltd</p>
              </div>
              <button class="follow">
                <i class="uil uil-plus"></i>
                <p>Follow</p>
              </button>
            </div>
          </a>
        </div> */}
        <a href="/" className={classes.addition_para}>
          View all recommendations <i class="uil uil-arrow-right"></i>
        </a>
      </div>
    </>
  );
}
