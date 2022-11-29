import {
  ADD_FEED_PROFILE_DETAILS_SUCCESS,
  ADD_FEED_PROFILE_FOLLOW_SUCCESS,
  ADD_FEED_PROFILE_LIST_SUCCESS,
} from "./actionType";

export const addProfileFeedList = (data) => {
  return {
    type: ADD_FEED_PROFILE_LIST_SUCCESS,
    payload: data,
  };
};
export const addProfileFeedDetails = (data) => {
  return {
    type: ADD_FEED_PROFILE_DETAILS_SUCCESS,
    payload: data,
  };
};
export const addProfileFeedFollow = (data) => {
  return {
    type: ADD_FEED_PROFILE_FOLLOW_SUCCESS,
    payload: data,
  };
};
