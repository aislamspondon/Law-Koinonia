import axios from "axios";
import { caseDelete } from "../case/actions";
import { CASE_DELETE_FAIL, CASE_DELETE_REQUEST } from "../case/actionType";
const fetchCaseDelete = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CASE_DELETE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/store/case/${id}/delete`,
        config
      );
      dispatch(caseDelete(data));
    } catch (error) {
      dispatch({
        type: CASE_DELETE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchCaseDelete;
