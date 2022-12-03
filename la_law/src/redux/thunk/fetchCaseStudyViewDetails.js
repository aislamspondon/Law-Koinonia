import axios from "axios";
import { caseStudyDetails } from "../case/actions";
import {
  CASE_STUDY_VIEW_DETAILS_FAIL,
  CASE_STUDY_VIEW_DETAILS_REQUEST,
} from "../case/actionType";
const fetchCaseStudyViewDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CASE_STUDY_VIEW_DETAILS_REQUEST });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/case_study/cases/${id}`,
        config
      );
      dispatch(caseStudyDetails(data));
    } catch (error) {
      dispatch({
        type: CASE_STUDY_VIEW_DETAILS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchCaseStudyViewDetails;
