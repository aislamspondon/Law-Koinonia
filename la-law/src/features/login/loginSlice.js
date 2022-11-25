import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLogin } from "./loginAPI";
const initialState = {
  userInfo: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchLoginAsync = createAsyncThunk(
  "user/fetchLogin",
  async ({ email, password }) => {
    const userLogin = await getLogin({ email, password });
    return userLogin;
  }
);

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchLoginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchLoginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default userLoginSlice.reducer;
export const { logout } = userLoginSlice.actions;
