import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userLoginReducer from "../features/login/loginSlice";
import userSignUpReducer from "../features/signUp/signUpSlice";

const userInfoFromStroge = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const userSignUpFromStroge = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStroge },
  userSignUp: { userInfo: userSignUpFromStroge },
};

export const store = configureStore({
  initialState,
  reducer: {
    counter: counterReducer,
    userLogin: userLoginReducer,
    userSignUp: userSignUpReducer,
  },
});
