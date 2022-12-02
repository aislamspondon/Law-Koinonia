import React from "react";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/ShortProfile.module.css";
export default function CaseTitle({ data }) {
  const { case_category, case_number, case_respondent, division } = data;
  return (
    <>
      <div className={`${classes.recent_div} ${classes.recent_case}`}>
        <div className={classes.recent_home_icon}>
          <i className="bx bxs-briefcase"></i>
        </div>
        <div className={classes.case_title}>
          <p>
            {`${case_category} ${case_number} ((From the ${case_respondent} by the ${division}))`}
          </p>
        </div>
      </div>
    </>
  );
}
