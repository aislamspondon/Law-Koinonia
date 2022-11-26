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
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
} from "./user/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  caseView: caseViewReducer,
  caseCreate: caseCreateReducer,
  caseUpdate: caseUpdateReducer,
  caseDelete: caseDeleteReducer,
  caseDetails: caseDetailsReducer,
  caseCategoryView: caseCategoryViewReducer,
  caseDivisionView: caseDivisionReducer,
});

export default rootReducer;
