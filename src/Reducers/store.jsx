import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import UserLoginReducer from "./UserLoginReducer";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    userlogin: UserLoginReducer,
  },
});
