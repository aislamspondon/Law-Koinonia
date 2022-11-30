import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPostOpinion from "../../../redux/thunk/fetchPostOpinion";

export default function OpinionPostBox({ profile_pic, author, post_id }) {
  const dispatch = useDispatch();
  const [opinion, setOpinion] = useState("");
  const submitOpinion = (e) => {
    e.preventDefault();
    dispatch(fetchPostOpinion(post_id, opinion));
  };
  return (
    <form
      onSubmit={submitOpinion}
      style={{
        margin: "20px auto",
        width: "90%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={`http://127.0.0.1:8000${profile_pic}`}
        alt={author}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      />
      <input
        type="text"
        style={{
          width: "90%",
          height: "50px",
          margin: "0px 15px",
          border: "none",
          padding: "5px 20px",
          background: "#F3F2EF",
          borderRadius: "12px",
        }}
        value={opinion}
        placeholder="Write a opinion"
        onChange={(e) => setOpinion(e.target.value)}
      />
    </form>
  );
}
