import React from "react";
import classes from "../../../../Styles/ChildStyles/StoreChild/MyCaseBox.module.css";
import CaseBox from "../../../CaseBox";
import AddCaseButton from "./AddCaseButton";
import CaseSearchBar from "./CaseSearchBar";
export default function MyCaseBox() {
  let alldata = [
    {
      id: "1",
      caseNumber: "Writ Petition 18627/2017",
      caseParties: "A.H.M Mainuddin vs Govt. of Bangladesh",
      caseDetails: "Broken Car in Chasara",
      division: "Appellate Division",
      result: "Fixed for hearing",
    },
    {
      id: "2",
      caseNumber: "Writ Petition 18627/2017",
      caseParties: "A.H.M Mainuddin vs Govt. of Bangladesh",
      caseDetails: "Broken Car in Chasara",
      division: "Appellate Division",
      result: "Fixed for hearing",
    },
    {
      id: "3",
      caseNumber: "Writ Petition 18627/2017",
      caseParties: "A.H.M Mainuddin vs Govt. of Bangladesh",
      caseDetails: "Broken Car in Chasara",
      division: "Appellate Division",
      result: "Fixed for hearing",
    },
    {
      id: "4",
      caseNumber: "Writ Petition 18627/2017",
      caseParties: "A.H.M Mainuddin vs Govt. of Bangladesh",
      caseDetails: "Broken Car in Chasara",
      division: "Appellate Division",
      result: "Fixed for hearing",
    },
    {
      id: "5",
      caseNumber: "Writ Petition 18627/2017",
      caseParties: "A.H.M Mainuddin vs Govt. of Bangladesh",
      caseDetails: "Broken Car in Chasara",
      division: "Appellate Division",
      result: "Fixed for hearing",
    },
  ];
  return (
    <div className={classes.my_case_box}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <CaseSearchBar />
        <AddCaseButton />
      </div>
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <CaseBox alldata={alldata} />
      </div>
    </div>
  );
}
