import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchNewsFeed from "../../../redux/thunk/fetchNewsFeed";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";
import PublicPost from "./PublicPost";

export default function PublicPosts() {
  const dispatch = useDispatch();
  const postnewsFeed = useSelector((state) => state.postnewsFeed);
  const { loading, posts } = postnewsFeed;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const postLike = useSelector((state) => state.postLike);
  const { success: likeSuccess } = postLike;
  const postOpinion = useSelector((state) => state.postOpinion);
  const { success: commentSuccess } = postOpinion;
  const postCreate = useSelector((state) => state.postCreate);
  const { success } = postCreate;
  const { results } = posts;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchNewsFeed);
    }
  }, [userInfo, dispatch, success, likeSuccess, commentSuccess]);

  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <div className={classes.public_posts}>
          {results.map((data) => {
            return (
              <>
                <PublicPost data={data} key={data.id} />
                <hr className={classes.hrclass} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
