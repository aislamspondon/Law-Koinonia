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
  caseStudyViewDetailsReducer,
  caseStudyViewReducer,
  caseUpdateReducer,
  caseViewReducer,
} from "./case/caseReducer";
import { newsDetailsReducer, newsViewReducer } from "./news/newsReducer";
import {
  myNewsFeedViewReducer,
  newsFeedViewReducer,
  postCommentReducer,
  postCreateReducer,
  postDeleteReducer,
  postLikeReducer,
  postUpdateReducer,
  postViewReducer,
  userNewsFeedViewReducer,
} from "./post/postReducer";
import {
  singleUserProfileReducer,
  userLoginReducer,
  userProfileReducer,
  userProfileUpdateReducer,
  userRegisterReducer,
} from "./user/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  singleUserProfile: singleUserProfileReducer,
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
  mypostnewsFeed: myNewsFeedViewReducer,
  userpostnewsFeed: userNewsFeedViewReducer,
  postLike: postLikeReducer,
  postOpinion: postCommentReducer,
  addFeedProfileList: addFeedProfileViewReducer,
  addFeedProfileDetails: addFeedProfileDetailsReducer,
  addFeedProfileFollow: addFeedProfileFollowReducer,
  caseStudyView: caseStudyViewReducer,
  caseStudyViewDetails: caseStudyViewDetailsReducer,
  newsView: newsViewReducer,
  newsDetails: newsDetailsReducer,
});

export default rootReducer;
