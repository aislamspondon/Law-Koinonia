import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchCaseCategory from "../../../redux/thunk/fetchCaseCategory";
import fetchCaseCreate from "../../../redux/thunk/fetchCaseCreate";
import fetchCaseDivision from "../../../redux/thunk/fetchCaseDivision";
import classes from "../../../Styles/ChildStyles/StoreChild/caseButton.module.css";

export default function AddCase() {
  const dispatch = useDispatch();
  const respondents = [
    { id: 1, label: "FIR/PRIVATE_COMPLAINT", value: "fir/private_complaint" },
    {
      id: 2,
      label: "ACCUSED_BROUGHT_BEFORE_THE_COURT",
      value: "accused_brought_before_the_court",
    },
    { id: 3, label: "PLEAD_GUILTY", value: "plead_guilty" },
    { id: 4, label: "PROSECUTION_EVIDENCE", value: "prosecution_evidence" },
    {
      id: 5,
      label: "EXAMINATION_OF_THE_ACCUSED",
      value: "examination_of_the_accused",
    },
    { id: 6, label: "DEFENSE_EVIDENCE", value: "defense_evidence" },
    { id: 7, label: "FIXED_FOR_HEARING", value: "fixed_for_hearing" },
    { id: 8, label: "JUDGEMENT", value: "judgement" },
  ];

  let navigate = useNavigate();
  const [case_number, setCaseNumber] = useState("");
  const [case_title, setCaseTitle] = useState("");
  const [caseCategory, setCaseCategory] = useState("");
  const [case_details, setCaseDetails] = useState("");
  const [complainant, setComplainent] = useState("");
  const [defendant, setDefendant] = useState("");
  const [division, setDivision] = useState("");
  const [case_respondent, setCaseRespondent] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const caseCategoryView = useSelector((state) => state.caseCategoryView);
  const { cases_category } = caseCategoryView;
  const caseDivisionView = useSelector((state) => state.caseDivisionView);
  const { cases_division } = caseDivisionView;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCaseCategory);
      dispatch(fetchCaseDivision);
    } else {
      navigate("/");
    }
  }, [dispatch, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      fetchCaseCreate(
        case_number,
        case_title,
        caseCategory,
        case_details,
        complainant,
        defendant,
        division,
        case_respondent
      )
    );
    navigate("/store/addcase/save");
  };
  return (
    <div>
      <h1 style={{ color: "black", padding: "50px 70px" }}>Store You Case</h1>
      <div style={{ margin: "5px 40px" }}>
        <form
          action=""
          method="post"
          style={{ textAlign: "center", padding: "20px" }}
        >
          <input
            type="text"
            name="case_number"
            id="case_number"
            placeholder="Enter Your Case Number"
            value={case_number}
            onChange={(e) => setCaseNumber(e.target.value)}
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 30px",
              margin: "20px",
              border: "none",
            }}
          />
          <br />
          <input
            type="text"
            name="case_title"
            id="case_title"
            placeholder="Enter Your Case Title"
            value={case_title}
            onChange={(e) => setCaseTitle(e.target.value)}
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 30px",
              margin: "20px",
              border: "none",
            }}
          />
          <br />
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              padding: "10px 30px",
              margin: "20px auto",
              background: "#FFFFFF",
            }}
          >
            <label style={{ color: "gray" }}>Select Case Category:</label>
            <select
              name="case_category"
              id="case_category"
              style={{
                width: "250px",
                height: "50px",
                fontSize: "16px",
                textAlign: "center",
                border: "none",
              }}
              value={caseCategory}
              onChange={(e) => {
                setCaseCategory(e.target.value);
              }}
            >
              {cases_category.map((option) => (
                <option value={option.name} key={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <textarea
            type="text"
            name="case_details"
            id="case_details"
            placeholder="Enter Your Case Details"
            value={case_details}
            onChange={(e) => setCaseDetails(e.target.value)}
            style={{
              width: "40%",
              height: "150px",
              padding: "10px 30px",
              margin: "20px",
            }}
          />

          <br />
          <input
            type="text"
            name="complainant"
            id="complainant"
            placeholder="Enter Your Case Complainant"
            value={complainant}
            onChange={(e) => setComplainent(e.target.value)}
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 30px",
              margin: "5px 20px 20px",
              border: "none",
            }}
          />
          <br />
          <input
            type="text"
            name="defendant"
            id="defendant"
            placeholder="Enter Your Case Defendant"
            value={defendant}
            onChange={(e) => setDefendant(e.target.value)}
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 30px",
              margin: "20px",
              border: "none",
            }}
          />
          <br />
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              padding: "10px 30px",
              margin: "20px auto",
              background: "#FFFFFF",
            }}
          >
            <label style={{ color: "gray" }}>Select Case Division:</label>
            <select
              name="division"
              id="division"
              style={{
                width: "250px",
                height: "50px",
                fontSize: "16px",
                textAlign: "center",
                border: "none",
              }}
              value={division}
              onChange={(e) => {
                setDivision(e.target.value);
              }}
            >
              {cases_division.map((option) => (
                <option value={option.name} key={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "60px",
              padding: "10px 30px",
              margin: "20px auto",
              background: "#FFFFFF",
            }}
          >
            <label style={{ color: "gray" }}>Select Case Respondent:</label>
            <select
              name="case_respondent"
              id="case_respondent"
              style={{
                width: "250px",
                height: "50px",
                fontSize: "16px",
                textAlign: "center",
                border: "none",
              }}
              value={case_respondent}
              onChange={(e) => {
                setCaseRespondent(e.target.value);
              }}
            >
              {respondents.map((option) => (
                <option value={option.label} key={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={submitHandler}
            style={{ border: "1px solid black", padding: "15px 40px" }}
            className={classes.addCaseButton}
            disabled={!case_title.length > 0}
          >
            Add Case
          </button>
        </form>
      </div>
    </div>
  );
}
