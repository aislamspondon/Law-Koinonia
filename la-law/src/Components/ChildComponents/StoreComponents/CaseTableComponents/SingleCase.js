import React from "react";
import classes from "../../../../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";

export default function SingleCase(props) {
  return (
    <>
      <tr className={classes.single_case}>
        <td>{props.case.id}</td>
        <td>{props.case.caseNumber}</td>
        <td>{props.case.caseParties}</td>
        <td>
          <a href="/">{props.case.caseDetails}</a>
        </td>
        <td>{props.case.division}</td>
        <td> {props.case.result}</td>
      </tr>
    </>
  );
}
