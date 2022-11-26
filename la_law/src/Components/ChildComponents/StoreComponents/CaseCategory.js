import React from "react";

import classes from "../../../Styles/ChildStyles/StoreChild/MyCaseCategory.module.css";
export default function CaseCategory(props) {
  return (
    <>
      <div className={classes.case_category}>
        <i class="uil uil-moneybag"></i>
        <p>{props.caseCategoryname}</p>
      </div>
    </>
  );
}
