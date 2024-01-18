import { configureStore } from "@reduxjs/toolkit";
import authStore from "./authStore";

export default configureStore({
  reducer: {
    authStore: authStore,
  },
});
