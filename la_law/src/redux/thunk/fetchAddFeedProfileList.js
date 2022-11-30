import axios from "axios";
import { addProfileFeedList } from "../addFeedProfile/actions";
import {
  ADD_FEED_PROFILE_LIST_FAIL,
  ADD_FEED_PROFILE_LIST_REQUEST,
} from "../addFeedProfile/actionType";

const fetchAddFeedProfile = async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_FEED_PROFILE_LIST_REQUEST });
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
      `http://127.0.0.1:8000/api/account/add_feed`,
      config
    );
    dispatch(addProfileFeedList(data));
  } catch (error) {
    dispatch({
      type: ADD_FEED_PROFILE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchAddFeedProfile;
