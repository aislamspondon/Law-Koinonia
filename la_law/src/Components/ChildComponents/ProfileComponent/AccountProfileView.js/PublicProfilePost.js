import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUserNewsFeed from "../../../../redux/thunk/fetchUserNewsFeed";
import PublicPost from "../../HomePageChildComponent/PublicPost";

export default function PublicProfilePost({ title, username }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userpostnewsFeed = useSelector((state) => state.userpostnewsFeed);
  const { posts: myposts } = userpostnewsFeed;
  const postLike = useSelector((state) => state.postLike);
  const { success: successLike } = postLike;

  const postOpinion = useSelector((state) => state.postOpinion);
  const { success: commentSuccess } = postOpinion;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchUserNewsFeed(username));
    }
  }, [dispatch, userInfo, successLike, commentSuccess, username]);
  return (
    <div>
      <div>
        <p
          style={{
            color: "RGBA(0, 0, 0, 0.9)",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "25px",
            padding: "15px 50px",
          }}
        >
          {title}
        </p>
      </div>
      <div style={{ padding: "15px 50px" }}>
        {myposts.map((post) => {
          return <PublicPost key={post.id} data={post} />;
        })}
      </div>
    </div>
  );
}
