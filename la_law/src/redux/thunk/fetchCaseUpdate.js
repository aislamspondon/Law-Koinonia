import axios from "axios";
import { caseUpdate } from "../case/actions";
import { CASE_UPDATE_FAIL, CASE_UPDATE_REQUEST } from "../case/actionType";
const fetchCaseUpdate = (
  id,
  case_number,
  case_title,
  case_category,
  case_details,
  complainant,
  defendant,
  division,
  case_respondent
) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CASE_UPDATE_REQUEST });
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
        `http://127.0.0.1:8000/api/store/case/update/${id}`,
        {
          case_number: case_number,
          case_title: case_title,
          case_category: case_category,
          case_details: case_details,
          complainant: complainant,
          defendant: defendant,
          division: division,
          case_respondent: case_respondent,
        },
        config
      );
      dispatch(caseUpdate(data));
    } catch (error) {
      dispatch({
        type: CASE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchCaseUpdate;
