import React from "react";
import NetworkProfileBox from "./NetworkProfileBox";
function ManageNetworkPage({ title, data }) {
  return (
    <div>
      <div
        style={{
          width: "80%",
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          padding: "10px 15px",
          borderRadius: "12px",
          margin: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "900px",
          }}
        >
          <p
            style={{
              color: "RGBA(0, 0, 0, 0.9)",
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: "600",
              padding: "20px 40px",
            }}
          >
            {title}
          </p>
        </div>
        <div style={{ margin: "15px" }}>
          {data?.map((item) => {
            return <NetworkProfileBox key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ManageNetworkPage;
