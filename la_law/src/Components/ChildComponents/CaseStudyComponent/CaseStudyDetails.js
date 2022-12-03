import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchCaseStudyViewDetails from "../../../redux/thunk/fetchCaseStudyViewDetails";

export default function CaseStudyDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const caseStudyViewDetails = useSelector(
    (state) => state.caseStudyViewDetails
  );
  const { cases } = caseStudyViewDetails;
  const created = cases.created;
  let date = created?.split("T")[0];

  useEffect(() => {
    dispatch(fetchCaseStudyViewDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <div style={{ border: "2px dotted #C8D9E6", background: "#F5F5F5" }}>
        <p
          style={{
            color: "RGB(29, 29, 27)",
            width: "70%",
            margin: "20px auto",
            fontSize: "36px",
            padding: "40px 0",
            fontWeight: "400",
          }}
        >
          {cases.title}
        </p>
      </div>
      <div>
        <div style={{ color: "black", display: "flex", padding: "10px 40px" }}>
          <p style={{ margin: "0px 20px" }}>Date: {date} </p>
        </div>
        {cases.images !== null && (
          <div
            style={{
              width: "53%",
              height: "400px",
              margin: "10px auto",
              position: "relative",
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <img
              src={`http://127.0.0.1:8000${cases.images}`}
              alt={cases.title}
              style={{ width: "100%", height: "100%", borderRadius: "12px" }}
            />
          </div>
        )}
        <div
          style={{
            color: "#000000",
            fontSize: " 20px",
            fontFamily: "serif",
            lineHeight: "36px",
            fontWeight: "400",
            margin: "40px",
            padding: "10px 36px",
            fontStyle: "normal",
            textTransform: "capitalize",
          }}
        >
          {cases.article}
        </div>
        {/* <div
          style={{
            width: "900px",
            height: "500px",
            position: "relative",
            margin: "10px auto",
          }}
        >
          <iframe
            width="853"
            height="480"
            src={"https://www.youtube-nocookie.com/embed/6O4s7v28nlw"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div> */}
      </div>
    </div>
  );
}
