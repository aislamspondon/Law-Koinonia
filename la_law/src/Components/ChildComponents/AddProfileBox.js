import React from "react";
import AddFriend from "./AditionalSideComponent/AddFriend";

function AddProfileBox() {
  return (
    <>
      <label
        style={{
          width: "27%",
          height: "150px",
          backgroundColor: "#F0F2F5",
          display: "flex",
          alignItems: "center",
          borderRadius: "12px",
          margin: "10px 5px",
        }}
      >
        <AddFriend />
      </label>
    </>
  );
}

export default AddProfileBox;
