import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cover from "../../../assets/images/cover/1627845013074.jfif";
import fetchUserDetails from "../../../redux/thunk/fetchUserProfile";
import fetchUserProfileUpdate from "../../../redux/thunk/fetchUserProfileUpdate";
import classes from "../../../Styles/ChildStyles/ProfileBodyStyle/ProfileBody.module.css";
import Loading from "../../Loading";

function ProfileEdit() {
  const dispatch = useDispatch();
  const current = new Date().toISOString().split("T")[0];
  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(user);
  const [designation, setDesignation] = useState(user.designation);
  const [court, setCourt] = useState(user.court);
  const [barId, setBarId] = useState(user.barId);
  const [present_address, setPresentAddress] = useState(user.present_address);
  const [permanent_address, setPermanentAddress] = useState(
    user.permanent_address
  );
  const [phone_number, setPhoneNumber] = useState(user.phone_number);
  const [facebook, setFacebook] = useState(user.facebook);
  const [website, setWebsite] = useState(user.website);
  const [description, setDescription] = useState(user.description);
  const [dob, setDOB] = useState(user.dob);
  const [profile_pic, setProfilePic] = useState("");

  const [work, setWork] = useState(false);
  const [address, setAddress] = useState(false);
  const [contact, setContact] = useState(false);
  const [details, setDetails] = useState(false);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profile_image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/account/profile-pic-upload",
        formData,
        config
      );
      setProfilePic(data);
      setUploading(false);
      navigate("/myprofile");
    } catch (error) {
      setUploading(false);
    }
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserDetails);
    }
  }, [dispatch, userInfo]);
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      fetchUserProfileUpdate(
        description,
        dob,
        designation,
        court,
        present_address,
        permanent_address,
        barId,
        website,
        facebook
      )
    );
    navigate("/myprofile");
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            width: "850px",
            height: "375px",
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
            <div style={{ margin: "80px 30px" }}>
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
            width: "850px",
            height: "435px",
            position: "relative",
            backgroundColor: "#ffffff",
            margin: "30px",
            borderRadius: "12px",
          }}
        >
          <p
            style={{
              color: "RGBA(0, 0, 0, 0.9)",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "25px",
              padding: "25px",
            }}
          >
            Profile Update
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "40%",
                //   border: "1px solid black",
                marginLeft: "10px",
              }}
            >
              <div
                style={{
                  padding: "10px 30px",
                  margin: "15px 5px",
                  fontSize: "16px",
                }}
                onClick={() => {
                  setWork(true);
                  setAddress(false);
                  setContact(false);
                  setDetails(false);
                }}
                className={classes.profile_edit_action}
              >
                Work and Education
              </div>
              <div
                style={{
                  padding: "10px 30px",
                  margin: "15px 5px",
                  fontSize: "16px",
                }}
                onClick={() => {
                  setWork(false);
                  setAddress(true);
                  setContact(false);
                  setDetails(false);
                }}
                className={classes.profile_edit_action}
              >
                Places Lived
              </div>
              <div
                style={{
                  padding: "10px 30px",
                  margin: "15px 5px",
                  fontSize: "16px",
                }}
                onClick={() => {
                  setWork(false);
                  setAddress(false);
                  setContact(true);
                  setDetails(false);
                }}
                className={classes.profile_edit_action}
              >
                Contact and basaic info
              </div>
              <div
                style={{
                  padding: "10px 30px",
                  margin: "15px 5px",
                  fontSize: "16px",
                }}
                onClick={() => {
                  setWork(false);
                  setAddress(false);
                  setContact(false);
                  setDetails(true);
                }}
                className={classes.profile_edit_action}
              >
                Details about you
              </div>
            </div>
            <form
              style={{
                width: "60%",
                marginRight: "10px",
                position: "relative",
              }}
            >
              {work ? (
                <div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Designation
                    </div>
                    <input
                      type="text"
                      name="designation"
                      id="designation"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Court
                    </div>
                    <input
                      type="text"
                      name="court"
                      id="court"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={court}
                      onChange={(e) => setCourt(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      BarId
                    </div>
                    <input
                      type="text"
                      name="barid"
                      id="barid"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={barId}
                      onChange={(e) => setBarId(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {address ? (
                <div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Present Address
                    </div>
                    <input
                      type="text"
                      name="present_address"
                      id="present_address"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={present_address}
                      onChange={(e) => setPresentAddress(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Permanent Address
                    </div>
                    <input
                      type="text"
                      name="permanent_address"
                      id="permanent_address"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={permanent_address}
                      onChange={(e) => setPermanentAddress(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {contact ? (
                <div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Mobile Number
                    </div>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Facebook
                    </div>
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Website
                    </div>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {details ? (
                <div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Description
                    </div>
                    <textarea
                      name="description"
                      id="description"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      width: "95%",
                      height: "75px",
                      borderRadius: "12px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                  >
                    <div style={{ padding: "2px 10px", color: "black" }}>
                      Date Of Birth
                    </div>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      style={{
                        width: "100%",
                        height: "45px",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "25px",
                        outline: "none",
                        padding: "0px 20px",
                        background: "white",
                        color: "black",
                      }}
                      value={dob}
                      onChange={(e) => setDOB(e.target.value)}
                      max={current}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className={classes.updateButton}
                onClick={updateSubmitHandler}
                style={{
                  padding: "12px 30px",
                  borderRadius: "12px",
                }}
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          margin: "30px 5px",
          borderRadius: "12px",
        }}
      >
        T
        <div
          style={{
            border: "1px solid black",
            padding: "50px 30px",
            margin: "10px 30px",
            borderRadius: "12px",
          }}
        >
          {uploading && <Loading />}
          {profile_pic && <div style={{ fontSize: "16px" }}>{profile_pic}</div>}
          <label style={{ color: "black", fontSize: "25px" }}>
            Change Your Profile Picture
          </label>
          <input
            type="file"
            name="profile_pic"
            id="profile_pic"
            style={{ margin: "20px 0px", fontSize: "20px" }}
            onChange={uploadFileHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
