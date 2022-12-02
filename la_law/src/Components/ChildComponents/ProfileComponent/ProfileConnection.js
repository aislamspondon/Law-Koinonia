import React from "react";
import FollowProfileTemplete from "./FollowProfileTemplete";

export default function ProfileConnection({ title, data }) {
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
      <div style={{ padding: "15px 120px" }}>
        {data.map((user) => {
          return <FollowProfileTemplete data={user} buttonName="Connected" />;
        })}
      </div>
    </div>
  );
}
