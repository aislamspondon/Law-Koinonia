import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSignUp } from "./signUpAPI";
const initialState = {
  userInfo: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchSignUpAsync = createAsyncThunk(
  "user/fetchSignUp",
  async ({
    first_name,
    last_name,
    email,
    phone_number,
    password,
    practice_court,
    current_status,
  }) => {
    const userSignUp = await getSignUp({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      practice_court,
      current_status,
    });
    return userSignUp;
  }
);

const userSignUpSlice = createSlice({
  name: "userSignUp",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignUpAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSignUpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchSignUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.userInfo = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default userSignUpSlice.reducer;
