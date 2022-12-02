import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMyNewsFeed from "../../../redux/thunk/fetchMyNewsfeedView";
import PublicPost from "../HomePageChildComponent/PublicPost";

export default function ProfilePost({ title }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const mypostnewsFeed = useSelector((state) => state.mypostnewsFeed);
  const { posts: myposts } = mypostnewsFeed;

  const postLike = useSelector((state) => state.postLike);
  const { success: successLike } = postLike;

  const postOpinion = useSelector((state) => state.postOpinion);
  const { success: commentSuccess } = postOpinion;
  useEffect(() => {
    if (userInfo) {
      dispatch(fetchMyNewsFeed);
    }
  }, [dispatch, userInfo, successLike, commentSuccess]);
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
