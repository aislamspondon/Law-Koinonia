import React from "react";

export default function GroupPage({ title, data, group_count }) {
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
                    src={`http://127.0.0.1:8000${item.group_photo}`}
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
                  <h2 style={{ color: "#000000" }}>{item.group_name}</h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "RGBA(0, 0, 0, 0.6)",
                      fontWeight: "600",
                    }}
                  >
                    {group_count} Members
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
                  <i class="bx bxs-group" style={{ fontSize: "20px" }}></i>
                  <p>Visit Group</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
