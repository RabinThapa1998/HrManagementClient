import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  logindetails: null,
};

const UserLoginReducer = createSlice({
  name: "Userlogin",
  initialState,
  reducers: {
    loginDetailsAction(state, action) {
      state.logindetails = action.payload.logindetails;
    },
  },
});

export const { loginDetailsAction } = UserLoginReducer.actions;
export default UserLoginReducer.reducer;
