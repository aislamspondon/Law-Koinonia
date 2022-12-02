import axios from "axios";
import { myNewsfeedView } from "../post/actions";
import {
  MY_NEWS_FEED_VIEW_FAIL,
  MY_NEWS_FEED_VIEW_REQUEST,
} from "../post/actionType";

const fetchMyNewsFeed = async (dispatch, getState) => {
  try {
    dispatch({ type: MY_NEWS_FEED_VIEW_REQUEST });
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
      `http://127.0.0.1:8000/api/publicpost/myposts`,
      config
    );
    dispatch(myNewsfeedView(data));
  } catch (error) {
    dispatch({
      type: MY_NEWS_FEED_VIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchMyNewsFeed;
