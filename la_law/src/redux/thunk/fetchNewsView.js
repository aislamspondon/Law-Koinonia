import axios from "axios";
import { newsList } from "../news/actions";
import { NEWS_LIST_FAIL, NEWS_LIST_REQUEST } from "../news/actionType";

const fetchNewsView = async (dispatch, getState) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });
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
      `http://127.0.0.1:8000/api/news/all`,
      config
    );
    dispatch(newsList(data));
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export default fetchNewsView;
