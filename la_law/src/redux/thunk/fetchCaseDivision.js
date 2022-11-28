import axios from "axios";
import { caseDivisionView } from "../case/actions";
import {
  CASE_DIVISION_VIEW_FAIL,
  CASE_DIVISION_VIEW_REQUEST,
} from "../case/actionType";

const fetchCaseDivision = async (dispatch, getState) => {
  try {
    dispatch({ type: CASE_DIVISION_VIEW_REQUEST });
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
      `http://127.0.0.1:8000/api/store/case-division`,
      config
    );
    dispatch(caseDivisionView(data));
  } catch (error) {
    dispatch({
      type: CASE_DIVISION_VIEW_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchCaseDivision;
