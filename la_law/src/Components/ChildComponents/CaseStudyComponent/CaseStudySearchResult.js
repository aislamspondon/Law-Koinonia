import React from "react";
import CaseButton from "./CaseButton";

export default function CaseStudySearchResult({ user }) {
  return (
    <div
      style={{
        color: "black",
        width: "80%",
        margin: "0px auto",
        lineHeight: "35px",
        padding: "10px 20px",
        fontSize: "18px",
        display: "flex",
      }}
    >
      <div>
        <CaseButton />
      </div>
      <div>{user.title}</div>
    </div>
  );
}
