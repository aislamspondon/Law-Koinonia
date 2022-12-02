import axios from "axios";
import { userSingleProfile } from "../user/actions";
import {
  SINGLE_USER_PROFILE_FAIL,
  SINGLE_USER_PROFILE_REQUEST,
} from "../user/actionType";

const fetchSingleUserProfile = (username) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SINGLE_USER_PROFILE_REQUEST });
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
        `http://127.0.0.1:8000/api/account/profile/${username}`,
        config
      );
      dispatch(userSingleProfile(data));
    } catch (error) {
      dispatch({
        type: SINGLE_USER_PROFILE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};

export default fetchSingleUserProfile;
