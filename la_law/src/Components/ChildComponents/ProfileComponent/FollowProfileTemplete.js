import React from "react";
import { Link } from "react-router-dom";

import classes from "../../../Styles/ChildStyles/ProfileBodyStyle/ProfileBody.module.css";

export default function FollowProfileTemplete({ data, buttonName }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        borderRadius: "12px",
        border: "1px dotted #f2eded",
        margin: "15px 0px",
      }}
    >
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={`http://127.0.0.1:8000${data.profile_pic}`}
          alt="He"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ padding: "0px 30px" }}>
        <Link
          to={`/profile/${data.username}`}
          style={{
            fontSize: "24px",
            fontFamily: "sans-serif",
            lineHeight: "25px",
            fontWeight: "bolder",
            color: "RGBA(0, 0, 0, 0.9)",
          }}
        >
          {data.full_name}
        </Link>
        <p
          style={{
            fontSize: "16px",
            fontFamily: "'Poppins', 'sans-serif'",
            lineHeight: "20px",
            fontWeight: "400",
            color: "RGBA(0, 0, 0, 0.6)",
          }}
        >
          {data.designation} at {data.court}
        </p>
      </div>
      <button className={classes.followerButton}>{buttonName}</button>
    </div>
  );
}
