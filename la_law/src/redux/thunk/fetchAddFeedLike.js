import axios from "axios";
import { addProfileFeedFollow } from "../addFeedProfile/actions";
import {
  ADD_FEED_PROFILE_FOLLOW_FAIL,
  ADD_FEED_PROFILE_FOLLOW_REQUEST,
} from "../addFeedProfile/actionType";

const fetchAddFeedLike = (username) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_FEED_PROFILE_FOLLOW_REQUEST });
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
        `http://127.0.0.1:8000/api/account/${username}/follow`,
        config
      );
      dispatch(addProfileFeedFollow(data));
    } catch (error) {
      dispatch({
        type: ADD_FEED_PROFILE_FOLLOW_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchAddFeedLike;
