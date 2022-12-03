import {
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
} from "./actionType";

export const newsViewReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case NEWS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const newsDetailsReducer = (state = { news: {} }, action) => {
  switch (action.type) {
    case NEWS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEWS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    case NEWS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
