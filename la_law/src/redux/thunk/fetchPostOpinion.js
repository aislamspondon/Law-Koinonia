import axios from "axios";
import { postComment } from "../post/actions";
import { POST_COMMENT_FAIL, POST_COMMENT_REQUEST } from "../post/actionType";

const fetchPostOpinion = (post_id, opinion) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POST_COMMENT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/publicpost/posts/opinion/${post_id}`,
        { comment: opinion },
        config
      );
      dispatch(postComment(data));
    } catch (error) {
      dispatch({
        type: POST_COMMENT_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchPostOpinion;
