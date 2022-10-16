import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { TENANT_ID, TENANT_NAME } from "../constants";
import agent from "../Services/agent";
import { setAccessToken } from "../Services/fetchWrapper";

type AuthState = {
  isLoggedIn: boolean;
  accessToken: string;
  error: boolean | null;
  tenantId: string;
  tenantName?: string;
};

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: "",
  error: null,
  // should depend on login - API doesn't return tenantId on Login, we cannot get the tenantId dynamically
  tenantId: TENANT_ID,
  tenantName: TENANT_NAME,
};

export const login = createAsyncThunk(
  "auth/login",
  (data: { email: string; password: string }) =>
    agent.Authentication.login(data.email, data.password)
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.error = false;
      state.accessToken = "";
      setAccessToken("");
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.error = false;
      state.accessToken = action.payload.access_token;
      setAccessToken(action.payload.access_token);
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.error = true;
    });
  },
});

export const authActions = authSlice.actions;

export const selectAccessToken = (state: RootState): string =>
  state.auth.accessToken;

export default authSlice;
