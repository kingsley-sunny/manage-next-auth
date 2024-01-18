import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const USER_STORAGE_KEY = "user";
const ACCESS_TOKEN_NAME = "accessToken";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    accessToken: getCookie(ACCESS_TOKEN_NAME) ?? null,
    user:
      typeof window !== "undefined"
        ? JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY) as string)
        : null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.token;
      setCookie(ACCESS_TOKEN_NAME, action.payload.token, {
        maxAge: action.payload.maxAge,
      });
    },

    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
    },

    logout: (state, action) => {
      // remove the access token
      state.accessToken = null;
      deleteCookie(ACCESS_TOKEN_NAME);

      // set the user to null
      state.user = null;
      localStorage.removeItem(USER_STORAGE_KEY);
    },
  },
});

export const { setAccessToken, setUser, logout } = authSlice.actions;

export const selectUser = (state: any) => state.authStore.user;
export const selectAccessToken = (state: any) => state.authStore.accessToken;

export default authSlice.reducer;
