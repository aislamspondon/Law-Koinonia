import React from "react";
import classes from "../Styles/ChildStyles/StoreChild/CaseTableComponent.module.css";
import SingleCase from "./ChildComponents/StoreComponents/CaseTableComponents/SingleCase";
export default function CaseBox(props) {
  console.log(props.alldata);
  return (
    <>
      <table style={{ width: "100%" }} className={classes.case_table}>
        <tr className={classes.table_head}>
          <th>SI</th>
          <th>Case Number</th>
          <th>Parties</th>
          <th>Details</th>
          <th>Division</th>
          <th>Result</th>
        </tr>
        {props.alldata.map((data) => {
          return (
            <>
              <SingleCase case={data} />
            </>
          );
        })}
      </table>
    </>
  );
}
