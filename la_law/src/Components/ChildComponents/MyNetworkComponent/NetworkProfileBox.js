import React from "react";

export default function NetworkProfileBox({ data }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        background: "#dbd0d0",
        width: "650px",
        height: "120px",
        margin: "20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          position: "relative",
          borderRadius: "50%",
        }}
      >
        <img
          src={`http://127.0.0.1:8000${data.profile_pic}`}
          alt="k"
          style={{
            width: "80px",
            height: "80px",
            position: "relative",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h2 style={{ color: "#000000" }}>{data.full_name}</h2>
        <p
          style={{
            fontSize: "13px",
            color: "RGBA(0, 0, 0, 0.6)",
            fontWeight: "600",
          }}
        >
          {data.designation} at {data.court}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "RGBA(0, 0, 0, 0.6)",
            fontWeight: "600",
          }}
        >
          Bar ID #{data.barId}
        </p>
      </div>
      <button
        style={{
          display: "flex",
          padding: "12px 14px",
          borderRadius: "12px",
          color: "white",
          background: "#42cae5",
        }}
      >
        <i class="bx bxs-chat" style={{ fontSize: "25px" }}></i>
        <p>Message</p>
      </button>
    </div>
  );
}
