import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  token: false,
};

const AuthReducer = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginAction(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { loginAction } = AuthReducer.actions;
export default AuthReducer.reducer;
