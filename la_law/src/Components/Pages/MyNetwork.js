import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUserDetails from "../../redux/thunk/fetchUserProfile";
import classes from "../../Styles/Pages/ManageMyNetwork.module.css";
import GroupPage from "../ChildComponents/MyNetworkComponent/GroupPage";
import ManageNetworkPage from "../ChildComponents/MyNetworkComponent/ManageNetworkPage";
import PendingInvitation from "../ChildComponents/MyNetworkComponent/PendingInvitation";

function MyNetwork() {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [connection, setConnection] = useState(false);
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserDetails);
    }
  }, [dispatch, userInfo]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          padding: "50px 10px 70px",
          width: "25%",
          background: "#ffffff",
          margin: "30px 40px",
          borderRadius: "12px",
        }}
      >
        <p style={{ color: "RGBA(0, 0, 0, 0.9)", padding: "5px" }}>
          Manage my network
        </p>
        <div style={{ margin: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            className={classes.link_item}
            onClick={() => {
              setConnection(true);
              setFollowers(false);
              setFollowing(false);
              setGroups(false);
              setEvents(false);
              setNewsletter(false);
              setPending(false);
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-users-alt"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>
                Connections
              </p>
            </div>
            <p>{user.connection_count}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            onClick={() => {
              setConnection(false);
              setFollowers(true);
              setFollowing(false);
              setGroups(false);
              setEvents(false);
              setNewsletter(false);
              setPending(false);
            }}
            className={classes.link_item}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-book-alt"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>Followers</p>
            </div>
            <p>{user.followers_count}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            onClick={() => {
              setConnection(false);
              setFollowers(false);
              setFollowing(true);
              setGroups(false);
              setEvents(false);
              setNewsletter(false);
              setPending(false);
            }}
            className={classes.link_item}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-user-circle"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>
                People I Follow
              </p>
            </div>
            <p>{user.following_count}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            onClick={() => {
              setConnection(false);
              setFollowers(false);
              setFollowing(false);
              setGroups(true);
              setEvents(false);
              setNewsletter(false);
              setPending(false);
            }}
            className={classes.link_item}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-users-alt"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>Groups</p>
            </div>
            <p>{user.group_count}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            onClick={() => {
              setConnection(false);
              setFollowers(false);
              setFollowing(false);
              setGroups(false);
              setEvents(true);
              setNewsletter(false);
              setPending(false);
            }}
            className={classes.link_item}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-schedule"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>Events</p>
            </div>
            <p>2</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "RGBA(0, 0, 0, 0.6)",
              padding: "10px",
            }}
            onClick={() => {
              setConnection(false);
              setFollowers(false);
              setFollowing(false);
              setGroups(false);
              setEvents(false);
              setNewsletter(true);
              setPending(false);
            }}
            className={classes.link_item}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <i class="uil uil-newspaper"></i>
              <p style={{ marginLeft: "15px", fontSize: "16px" }}>Newsletter</p>
            </div>
            <p>1</p>
          </div>
        </div>
      </div>
      {connection ? (
        <ManageNetworkPage title="Connected You Are" data={user.connection} />
      ) : (
        ""
      )}
      {followers ? (
        <ManageNetworkPage title="Your Followers Are" data={user.followers} />
      ) : (
        ""
      )}
      {following ? (
        <ManageNetworkPage title="People I Follow" data={user.following} />
      ) : (
        ""
      )}
      {groups ? (
        <GroupPage
          title="Group"
          data={user.groups}
          group_count={user.group_count}
        />
      ) : (
        ""
      )}
      {events ? (
        <ManageNetworkPage title="Events I Like To Join" data={[]} />
      ) : (
        ""
      )}
      {newsletter ? <GroupPage title="News Letter" data={[]} /> : ""}

      {pending ? <PendingInvitation /> : ""}
    </div>
  );
}

export default MyNetwork;
