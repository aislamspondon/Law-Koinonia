import axios from "axios";
import { caseStudy } from "../case/actions";
import {
  CASE_STUDY_VIEW_FAIL,
  CASE_STUDY_VIEW_REQUEST,
} from "../case/actionType";

const fetchCaseStudyView = async (dispatch) => {
  try {
    dispatch({ type: CASE_STUDY_VIEW_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/case_study/cases`,
      config
    );
    dispatch(caseStudy(data));
  } catch (error) {
    dispatch({
      type: CASE_STUDY_VIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchCaseStudyView;
