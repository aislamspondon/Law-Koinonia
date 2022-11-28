import axios from "axios";
import { caseDetails } from "../case/actions";
import { CASE_DETAILS_FAIL, CASE_DETAILS_REQUEST } from "../case/actionType";
const fetchCaseDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CASE_DETAILS_REQUEST });
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
        `http://127.0.0.1:8000/api/store/case/${id}`,
        config
      );
      dispatch(caseDetails(data));
    } catch (error) {
      dispatch({
        type: CASE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchCaseDetails;
