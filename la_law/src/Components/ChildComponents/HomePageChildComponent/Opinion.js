import React, { useEffect, useState } from "react";

export default function Opinion({ data, authorId }) {
  const [author, setAuthor] = useState(false);
  const {
    opinioner_name,
    opinioner,
    opinioner_pic,
    comment,
    user: OpinionerId,
  } = data;

  useEffect(() => {
    if (authorId === OpinionerId) {
      setAuthor(true);
    }
  }, [authorId, OpinionerId]);
  return (
    <div
      style={{
        margin: "20px 80px",
        width: "90%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={`http://127.0.0.1:8000${opinioner_pic}`}
        alt={opinioner}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "relative",
          overflow: "hidden",
        }}
      />
      <div
        type="text"
        style={{
          width: "80%",
          height: "70px",
          margin: "0px 15px",
          border: "none",
          padding: "5px 20px",
          background: "#F3F2EF",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "13px",
              padding: "5px 0px",
              fontFamily: "sans-serif",
              lineHeight: "16px",
              fontWeight: "600",
            }}
          >
            {opinioner_name}
          </p>
          {author && (
            <p
              style={{
                color: "#C3A39F",
                fontSize: "13px",
                padding: "5px 0px",
                fontFamily: "sans-serif",
                lineHeight: "16px",
                fontWeight: "600",
              }}
            >
              Author
            </p>
          )}
        </div>
        <p
          style={{
            fontSize: "15px",
            color: "black",
            lineHeight: "19.9995px",
            fontWeight: "400",
            fontFamily: "sans-serif",
            // padding: "3px 5px",
            margin: "3px 0px 10px",
          }}
        >
          {comment}
        </p>
      </div>
    </div>
  );
}
