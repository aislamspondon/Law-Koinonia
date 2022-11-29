import { combineReducers } from "redux";
import {
  caseCategoryViewReducer,
  caseCreateReducer,
  caseDeleteReducer,
  caseDetailsReducer,
  caseDivisionReducer,
  caseUpdateReducer,
  caseViewReducer,
} from "./case/caseReducer";
import {
  newsFeedViewReducer,
  postCreateReducer,
  postDeleteReducer,
  postUpdateReducer,
  postViewReducer,
} from "./post/postReducer";
import {
  userLoginReducer,
  userProfileReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
} from "./user/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userProfileUpdate: userProfileUpdateReducer,
  caseView: caseViewReducer,
  caseCreate: caseCreateReducer,
  caseUpdate: caseUpdateReducer,
  caseDelete: caseDeleteReducer,
  caseDetails: caseDetailsReducer,
  caseCategoryView: caseCategoryViewReducer,
  caseDivisionView: caseDivisionReducer,
  postCreate: postCreateReducer,
  postView: postViewReducer,
  postUpdate: postUpdateReducer,
  postDelete: postDeleteReducer,
  postnewsFeed: newsFeedViewReducer,
});

export default rootReducer;
