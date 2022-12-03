import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchNewsView from "../../../redux/thunk/fetchNewsView";
import classes from "../../../Styles/ChildStyles/GlobalNewsStyle/NewsBody.module.css";
import NewsDiv from "./NewsDiv";

export default function NewsBody() {
  const dispatch = useDispatch();
  const newsView = useSelector((state) => state.newsView);
  const { news } = newsView;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchNewsView);
    }
  }, [userInfo, dispatch]);
  return (
    <div className={classes.news_body} style={{ width: "75%" }}>
      <div style={{ display: "flex", padding: "20px", alignItems: "center" }}>
        <input
          type="text"
          style={{ width: "25vw", height: "50px", borderRadius: "12px" }}
        />
        <button
          type="submit"
          style={{
            fontSize: "25px",
            margin: "0 20px",
            backgroundColor: "transparent",
          }}
        >
          <i class="uil uil-search"></i>
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {news.results?.map((news) => {
          return (
            <>
              <NewsDiv news={news} key={news._id} />
            </>
          );
        })}
      </div>
    </div>
  );
}
