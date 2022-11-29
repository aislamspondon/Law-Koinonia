import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import fetchCaseDelete from "../../../../redux/thunk/fetchCaseDelete";
import fetchCaseDetails from "../../../../redux/thunk/fetchCaseDetails";
import CaseDetailsBox from "./CaseDetailsBox";

export default function CaseDetails() {
  const { id } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const caseDetails = useSelector((state) => state.caseDetails);
  const {
    case_number,
    case_title,
    case_category,
    case_docs,
    case_details,
    complainant,
    defendant,
    division,
    case_respondent,
  } = caseDetails.case;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCaseDetails(id));
    } else {
      navigate("/");
    }
  }, [navigate, userInfo, dispatch, id]);
  const deletesubmitHandler = (e) => {
    if (window.confirm("Are you sure you want to delete this case?")) {
      dispatch(fetchCaseDelete(id));
      navigate("/store");
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ color: "black", padding: "20px" }}>
          Hello, <Link to="/myprofile">@{userInfo.username}</Link>
        </h1>
        <div style={{ padding: "20px" }}>
          <Link to={`/store`} style={{ margin: "0px 10px" }}>
            <i class="bx bx-revision" style={{ fontSize: "35px" }}></i>
          </Link>
          <Link to={`/store/case/${id}/edit`} style={{ margin: "0px 10px" }}>
            <i
              class="bx bx-edit"
              style={{ fontSize: "35px", color: "black" }}
            ></i>
          </Link>
          <button
            type="submit"
            style={{ margin: "0px 10px" }}
            onClick={deletesubmitHandler}
          >
            <i
              class="bx bx-trash"
              style={{ fontSize: "35px", color: "red" }}
            ></i>
          </button>
        </div>
      </div>

      <div style={{ margin: "40px auto", width: "60%", position: "relative" }}>
        <CaseDetailsBox name="Case Number" value={case_number} />
        <CaseDetailsBox name="Case Title" value={case_title} />
        <CaseDetailsBox name="Case Category" value={case_category} />
        <CaseDetailsBox
          name="Case docs"
          value={
            case_docs ? (
              <a href={`http://127.0.0.1:8000${case_docs}`}>{case_details}</a>
            ) : (
              <p style={{ color: "red" }}>File Empty</p>
            )
          }
        />
        <CaseDetailsBox name="Complainant" value={complainant} />
        <CaseDetailsBox name="Defendant" value={defendant} />
        <CaseDetailsBox name="Division" value={division} />
        <CaseDetailsBox name="Case Respondent" value={case_respondent} />
      </div>
    </div>
  );
}
