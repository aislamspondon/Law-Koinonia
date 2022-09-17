import React from "react";
import PublicPost from "./PublicPost";

import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";

export default function PublicPosts() {
  let alldata = [
    {
      name: "Jahidul Islam",
      desig: "Student",
      company: "RPSU",
      post: "Today is one of the best day of my life and i enjoy this day very well. Thanks Everyone to arrange everything for my.",
    },
    {
      name: "Asraful Islam",
      desig: "Student",
      company: "DIU",
      post: "i enjoy this day very well. Thanks Everyone to arrange everything for my.",
    },
  ];
  return (
    <>
      <div className={classes.public_posts}>
        {alldata.map((data) => {
          return (
            <>
              <PublicPost data={data} />
              <hr className={classes.hrclass} />
            </>
          );
        })}
      </div>
    </>
  );
}
