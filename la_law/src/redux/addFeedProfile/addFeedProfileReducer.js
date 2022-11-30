import {
  ADD_FEED_PROFILE_DETAILS_FAIL,
  ADD_FEED_PROFILE_DETAILS_REQUEST,
  ADD_FEED_PROFILE_DETAILS_SUCCESS,
  ADD_FEED_PROFILE_FOLLOW_FAIL,
  ADD_FEED_PROFILE_FOLLOW_REQUEST,
  ADD_FEED_PROFILE_FOLLOW_SUCCESS,
  ADD_FEED_PROFILE_LIST_FAIL,
  ADD_FEED_PROFILE_LIST_REQUEST,
  ADD_FEED_PROFILE_LIST_SUCCESS,
} from "./actionType";

export const addFeedProfileViewReducer = (
  state = { addUserProfiles: [] },
  action
) => {
  switch (action.type) {
    case ADD_FEED_PROFILE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_FEED_PROFILE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        addUserProfiles: action.payload,
      };
    case ADD_FEED_PROFILE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const addFeedProfileDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FEED_PROFILE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ADD_FEED_PROFILE_DETAILS_SUCCESS:
      return {
        loading: false,
        profile: action.payload,
      };
    case ADD_FEED_PROFILE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const addFeedProfileFollowReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_FEED_PROFILE_FOLLOW_REQUEST:
      return {
        loading: true,
      };
    case ADD_FEED_PROFILE_FOLLOW_SUCCESS:
      return {
        loading: false,
        following: action.payload,
        success: true,
      };
    case ADD_FEED_PROFILE_FOLLOW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
