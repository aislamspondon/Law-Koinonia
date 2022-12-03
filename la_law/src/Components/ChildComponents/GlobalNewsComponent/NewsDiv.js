import React from "react";
import { Link } from "react-router-dom";
import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";

function NewsDiv({ news }) {
  return (
    <div
      className={classes.news}
      style={{
        width: "310px",
        height: "370px",
        borderStyle: "groove",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "15px",
          color: "#000000",
          fontFamily: "Serif",
          fontSize: "19px",
          fontWeight: "bold",
        }}
      >
        {news.title}
      </div>
      <div style={{ padding: "5px", color: "#000000", fontFamily: "Serif" }}>
        <img
          src={`http://127.0.0.1:8000/${news.image}`}
          alt={news.title}
          style={{ borderRadius: "12px" }}
        />
      </div>
      <div style={{ padding: "15px", color: "#000000", fontFamily: "Serif" }}>
        <Link to={`/global_news/${news._id}`}>See More</Link>
      </div>
    </div>
  );
}

export default NewsDiv;
