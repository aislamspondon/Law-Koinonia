import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchCaseStudyView from "../../redux/thunk/fetchCaseStudyViewReducer";
import classes from "../../Styles/Pages/CaseStudy.module.css";
import CaseStudyIcons from "../ChildComponents/CaseStudyComponent/CaseStudyIcons";
import CaseStudySearchResult from "../ChildComponents/CaseStudyComponent/CaseStudySearchResult";
export default function CaseStudy() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const caseStudyView = useSelector((state) => state.caseStudyView);
  const { cases } = caseStudyView;
  const [query, setQuery] = useState("");
  console.log();
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchCaseStudyView);
    }
  }, [dispatch, userInfo]);
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <div>
            <input
              type="text"
              placeholder="Search Your Case"
              style={{
                width: "60vw",
                height: "50px",
                paddingLeft: "50px",
                margin: "20px",
                borderRadius: "12px",
                outline: "none",
                border: "1px solid #9DA3BD",
              }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* <CaseButton /> */}
        </div>
        <CaseStudyIcons />

        <hr />
      </div>
      <div className={classes.case_study_result}>
        {query.length > 2 &&
          cases
            .filter((user) =>
              user.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((user) => {
              return <CaseStudySearchResult key={user.id} user={user} />;
            })}
      </div>
    </>
  );
}
