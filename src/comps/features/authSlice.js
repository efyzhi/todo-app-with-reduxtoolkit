import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase";


const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user =  action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const{ user } = userCredential;

      const serializableUser = {
        uid: user.uid,
        email: user.email,
      }

      dispatch(login(serializableUser));
    } catch (error) {
      console.error("login error", error.message);
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error("Logout error:", error.message);
  }
};

export const signupUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(loginUser(userCredential.user));
    } catch (error) {
      console.error("signup error:", error.message);
    }
  };