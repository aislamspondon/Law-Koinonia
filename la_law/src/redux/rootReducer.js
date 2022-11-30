import { combineReducers } from "redux";
import {
  addFeedProfileDetailsReducer,
  addFeedProfileFollowReducer,
  addFeedProfileViewReducer,
} from "./addFeedProfile/addFeedProfileReducer";
import {
  caseCategoryViewReducer,
  caseCreateReducer,
  caseDeleteReducer,
  caseDetailsReducer,
  caseDivisionReducer,
  caseProfileViewReducer,
  caseUpdateReducer,
  caseViewReducer,
} from "./case/caseReducer";
import {
  newsFeedViewReducer,
  postCommentReducer,
  postCreateReducer,
  postDeleteReducer,
  postLikeReducer,
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
  caseProfileView: caseProfileViewReducer,
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
  postLike: postLikeReducer,
  postOpinion: postCommentReducer,
  addFeedProfileList: addFeedProfileViewReducer,
  addFeedProfileDetails: addFeedProfileDetailsReducer,
  addFeedProfileFollow: addFeedProfileFollowReducer,
});

export default rootReducer;
