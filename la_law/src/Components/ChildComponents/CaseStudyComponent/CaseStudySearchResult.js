import React from "react";
import { Link } from "react-router-dom";
import classes from "../../../Styles/Pages/CaseStudy.module.css";
import CaseButton from "./CaseButton";

export default function CaseStudySearchResult({ user }) {
  return (
    <div className={classes.case_study_result_item}>
      <div>
        <CaseButton />
      </div>
      {user.tags === "Books" || user.tags === "Files" ? (
        <a
          href={`http://127.0.0.1:8000/${user.files}`}
          style={{
            color: "#333030",
          }}
        >
          {user.title}
        </a>
      ) : (
        <Link
          to={`/case_study/${user.id}`}
          style={{
            color: "#333030",
          }}
        >
          {user.title}
        </Link>
      )}
    </div>
  );
}
