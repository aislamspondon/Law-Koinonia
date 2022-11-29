import axios from "axios";
import { userProfileUpdate } from "../user/actions";
import {
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
} from "../user/actionType";

const fetchUserProfileUpdate = (
  description,
  dob,
  designation,
  court,
  present_address,
  permanent_address,
  barId,
  website,
  facebook
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USER_PROFILE_UPDATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `http://127.0.0.1:8000/api/account/update-profile`,
        {
          description: description,
          dob: dob,
          designation: designation,
          present_address: present_address,
          permanent_address: permanent_address,
          court: court,
          barId: barId,
          website: website,
          facebook: facebook,
        },
        config
      );
      console.log(data);
      dispatch(userProfileUpdate(data[0]));
    } catch (error) {
      dispatch({
        type: USER_PROFILE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchUserProfileUpdate;
