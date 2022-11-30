import axios from "axios";
import { postLike } from "../post/actions";
import { POST_LIKE_FAIL, POST_LIKE_REQUEST } from "../post/actionType";

const fetchPostLike = (post_id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POST_LIKE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/publicpost/posts/like/${post_id}`,
        config
      );
      dispatch(postLike(data));
    } catch (error) {
      dispatch({
        type: POST_LIKE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchPostLike;
