import React from "react";

export default function CaseDetailsBox({ name, value }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        borderBottom: "1px solid black",
        padding: "10px 80px",
        justifyContent: "space-between",
        color: "#252218",
        fontSize: "20px",
        margin: "10px 5px",
      }}
    >
      <label>{name}</label>
      <p style={{ width: "300px", height: "auto" }}>{value}</p>
    </div>
  );
}
