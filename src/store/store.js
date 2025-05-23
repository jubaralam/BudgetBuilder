// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"; // ✅ Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ key must match the one used in useSelector
  },
});

export default store;
