import { NEWS_DETAILS_SUCCESS, NEWS_LIST_SUCCESS } from "./actionType";

export const newsList = (data) => {
  return {
    type: NEWS_LIST_SUCCESS,
    payload: data,
  };
};

export const newsDetails = (data) => {
  return {
    type: NEWS_DETAILS_SUCCESS,
    payload: data,
  };
};
