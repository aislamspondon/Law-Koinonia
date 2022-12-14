import {
  SINGLE_USER_PROFILE_FAIL,
  SINGLE_USER_PROFILE_REQUEST,
  SINGLE_USER_PROFILE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RESET,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./actionType";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_PROFILE_RESET:
      return {
        user: {},
      };

    default:
      return state;
  }
};

export const userProfileUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_UPDATE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_PROFILE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const singleUserProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SINGLE_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case SINGLE_USER_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
