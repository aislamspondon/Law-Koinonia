import React, { useState } from "react";

export default function AddCase() {
  const [case_number, setCaseNumber] = useState("");
  const [case_title, setCaseTitle] = useState("");
  const [case_category, setCaseCategory] = useState("");
  const [case_details, setCaseDetails] = useState("");
  const [case_docs, setCaseDocs] = useState("");
  const [complainant, setComplainent] = useState("");
  const [defendant, setDefendant] = useState("");
  const [division, setDivision] = useState("");
  const [case_respondent, setCaseRespondent] = useState("");

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("case_file", file);
    setCaseDocs(formData);
  };
  const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
  return (
    <div>
      <h1 style={{ color: "black", padding: "50px 70px" }}>Store You Case</h1>
      <div style={{ border: "1px solid black", margin: "20px 40px" }}>
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
            <label style={{ color: "gray" }} for="case_category">
              Select Case Category:
            </label>
            <select
              name="case_category"
              id="case_category"
              style={{
                width: "250px",
                height: "50px",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
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

          <div
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 15px",
              margin: "15px auto",
              display: "flex",
              justifyContent: "space-between",
              background: "#FFFFFF",
            }}
          >
            <label style={{ color: "gray" }}>Upload Your Case </label>
            <input
              type="file"
              name="case_docs"
              id="case_docs"
              onChange={uploadFileHandler}
            />
          </div>
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
          <input
            type="text"
            name="division"
            id="division"
            placeholder="Seleted Case Division"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
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
            name="case_respondent"
            id="case_respondent"
            placeholder="Enter Your Case Respondent"
            value={case_respondent}
            onChange={(e) => setCaseRespondent(e.target.value)}
            style={{
              width: "40%",
              height: "50px",
              padding: "10px 30px",
              margin: "20px",
              border: "none",
            }}
          />
        </form>
      </div>
    </div>
  );
}
