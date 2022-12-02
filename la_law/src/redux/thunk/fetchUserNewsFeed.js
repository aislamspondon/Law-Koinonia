import axios from "axios";
import { userNewsfeedView } from "../post/actions";
import {
  USER_NEWS_FEED_VIEW_FAIL,
  USER_NEWS_FEED_VIEW_REQUEST,
} from "../post/actionType";

const fetchUserNewsFeed = (username) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_NEWS_FEED_VIEW_REQUEST });
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
        `http://127.0.0.1:8000/api/publicpost/posts/${username}/`,
        config
      );
      dispatch(userNewsfeedView(data));
    } catch (error) {
      dispatch({
        type: USER_NEWS_FEED_VIEW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchUserNewsFeed;
