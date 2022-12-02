import React from "react";

export default function ProfileActivity({ title }) {
  return (
    <div>
      <div>
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "25px",
            padding: "15px 50px",
          }}
        >
          {title}
        </p>
      </div>
      <div style={{ padding: "15px 50px" }}></div>
    </div>
  );
}
