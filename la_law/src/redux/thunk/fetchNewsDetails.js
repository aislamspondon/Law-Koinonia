import axios from "axios";
import { newsDetails } from "../news/actions";
import { NEWS_DETAILS_FAIL, NEWS_DETAILS_REQUEST } from "../news/actionType";
const fetchNewsDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: NEWS_DETAILS_REQUEST });
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
        `http://127.0.0.1:8000/api/news/${id}`,
        config
      );
      dispatch(newsDetails(data));
    } catch (error) {
      dispatch({
        type: NEWS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
};
export default fetchNewsDetails;
