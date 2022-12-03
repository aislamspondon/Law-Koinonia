import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchNewsDetails from "../redux/thunk/fetchNewsDetails";

export default function NewsDetails() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const newsDetails = useSelector((state) => state.newsDetails);
  const { news } = newsDetails;
  console.log(news);
  const created = news.created;
  let date = created?.split("T")[0];

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchNewsDetails(id));
    }
  }, [userInfo, dispatch, id]);

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
          {news.title}
        </p>
      </div>
      <div>
        <div style={{ color: "black", display: "flex", padding: "10px 40px" }}>
          <p style={{ margin: "0px 20px" }}>Date: {date} </p>
          <p style={{ margin: "0px 50px" }}>Category: {news.news_category}</p>
          <p style={{ margin: "0px 50px" }}>Country: {news.country}</p>
        </div>
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
            src={`http://127.0.0.1:8000/${news.image}`}
            alt={news.title}
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </div>
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
          {news.news_details}
        </div>
        {news.video !== null && (
          <div
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
              src={news.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        )}
      </div>
    </div>
  );
}
