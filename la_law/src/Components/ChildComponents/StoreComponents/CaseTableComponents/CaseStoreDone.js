import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import checked from "../../../../assets/images/image/check-mark.gif";
export default function CaseStoreDone() {
  const caseCreate = useSelector((state) => state.caseCreate);
  let id = 0;
  const { new_case } = caseCreate;
  console.log(new_case, "First");
  if (new_case !== undefined) {
    id = new_case._id;
  }
  console.log(caseCreate);
  return (
    <div style={{ textAlign: "center", margin: "60px 0px" }}>
      <img src={checked} alt="Upload..." />
      <div style={{ fontSize: "30px", margin: "30px", color: "#74B13D" }}>
        Your File Uplaod !
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link
          to={`/store`}
          style={{
            display: "flex",
            alignItems: "center",
            color: "red",
          }}
        >
          <i class="bx bx-revision"></i>
          <p style={{ fontSize: "20px", marginLeft: "10px" }}>
            Store Your File Later
          </p>
        </Link>
        <Link to={`/store/addcase/upload-casefile/${id}`}>
          <p style={{ fontSize: "20px" }}>Continue Upload Your File Now</p>
        </Link>
      </div>

      <br />
      <br />
    </div>
  );
}
