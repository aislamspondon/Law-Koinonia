import React from "react";
import classes from "../../../Styles/Pages/CaseStudy.module.css";
import CaseButton from "./CaseButton";

export default function CaseStudySearchResult({ user }) {
  return (
    <div className={classes.case_study_result_item}>
      <div>
        <CaseButton />
      </div>
      <div>{user.title}</div>
    </div>
  );
}
