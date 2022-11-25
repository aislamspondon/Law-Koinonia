import React from "react";
import classes from "../../../Styles/ChildStyles/StoreChild/MyCaseCategory.module.css";
import CaseCategory from "./CaseCategory";

const caseCategorydata = [
  "ARBITRATION ACT CASE",
  "CIVIL APPEAL",
  "COMPANY APPEAL",
  "CIVIL ORIGINAL",
  "CRIMINAL MISCELLANEOUS PETITION",
  "DIVORCE PETITION",
  "FIRST APPEAL ORDER",
];

export default function MyCaseCategoryBar() {
  return (
    <div className={classes.my_case_category}>
      <div className={classes.category_title}>
        <i class="uil uil-list-ul"></i>
        <p>My Case Category</p>
      </div>
      <div className={classes.case_categoryes}>
        {caseCategorydata.map((caseCategoryname) => {
          return <>{<CaseCategory caseCategoryname={caseCategoryname} />}</>;
        })}
      </div>
    </div>
  );
}
