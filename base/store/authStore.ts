import { createSlice } from "@reduxjs/toolkit";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const USER_STORAGE_KEY = "user";
const ACCESS_TOKEN_NAME = "accessToken";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    accessToken: getCookie(ACCESS_TOKEN_NAME) ?? null,
    user: typeof window !== "undefined" ? window.localStorage.getItem(USER_STORAGE_KEY) : null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.token;
      setCookie(ACCESS_TOKEN_NAME, action.payload.token, {
        maxAge: action.payload.maxAge,
      });
    },

    removeAccessToken: (state, action) => {
      state.accessToken = null;
      setCookie(ACCESS_TOKEN_NAME, action.payload.token, {
        maxAge: action.payload.maxAge,
      });
    },

    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
    },

    removeUser: (state, action) => {
      state.user = null;
      localStorage.removeItem(USER_STORAGE_KEY);
    },

    logout: (state, action) => {
      deleteCookie("user");
      deleteCookie(USER_STORAGE_KEY);
    },
  },
});

export const { setAccessToken, setUser } = authSlice.actions;

export const selectAuth = (state: any) => state.counter.value;

export default authSlice.reducer;
