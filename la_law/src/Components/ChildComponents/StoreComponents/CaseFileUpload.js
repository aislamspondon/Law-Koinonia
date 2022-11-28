import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchCaseDetails from "../../../redux/thunk/fetchCaseDetails";
import Loading from "../../Loading";
export default function CaseFileUpload() {
  const { id } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const caseDetails = useSelector((state) => state.caseDetails);

  const [case_docs, setCaseDocs] = useState("");

  const [upload, setUpload] = useState(false);
  const [uploading, setUploading] = useState(false);
  // const { case } = caseDetails;
  console.log(caseDetails.case);
  const { case_number, case_title, user } = caseDetails.case;
  console.log(`${userInfo.first_name} ${userInfo.last_name}`);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("case_file", file);
    formData.append("case_id", id);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/store/casefile-upload/",
        formData,
        config
      );
      setUpload(true);
      setCaseDocs(data);
      console.log(data);
      setUploading(false);
      setUpload(false);
      navigate("/store");
    } catch (error) {
      setUploading(false);
    }
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCaseDetails(id));
    } else {
      navigate("/");
    }
  }, [userInfo, dispatch, id, navigate]);
  return (
    <div>
      <div style={{ padding: "50px", color: "black" }}>
        <h1 style={{ color: "black" }}>
          Hello {`${userInfo.first_name} ${userInfo.last_name}`}
        </h1>
        <p>
          UserName :<Link to=""> @{user}</Link>
        </p>
      </div>
      <div
        style={{
          padding: "10px",
          width: "40%",
          margin: "15px auto",
        }}
      >
        <h2 style={{ padding: "10px", color: "black" }}>
          Your Case is "{case_title}"
        </h2>
        <h3 style={{ padding: "2px 10px", color: "black" }}>
          Your Case Number is "{case_number}"
        </h3>
      </div>
      <div
        style={{
          width: "40%",
          height: "50px",
          padding: "12px 15px",
          margin: "15px auto",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {uploading && <Loading />}
        {upload && alert(case_docs)}
        <label style={{ color: "blue", fontSize: "20px" }}>
          Upload Your Case File
        </label>
        <input
          type="file"
          name="case_docs"
          id="case_docs"
          onChange={uploadFileHandler}
        />
      </div>
    </div>
  );
}
