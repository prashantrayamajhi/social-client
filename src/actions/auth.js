import Axios from "./../api/server";
import { LOGIN, LOGOUT, FAILURE, SUCCESS } from "./../constants/actionTypes";

export const signup = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/signup", data);
    if (res.status === 201) {
      dispatch({
        type: SUCCESS,
        payload: "Account created, please verify your account",
      });
      window.location.href = "/verify/" + res.data.data.email;
    }
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.response.data.err });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/login", data);
    if (res.status === 200) {
      dispatch({
        type: LOGIN,
        payload: res.data.data,
      });
    }
    window.location.href = "/";
  } catch (error) {
    if (error.response.data.err === "Please verify you account through mail") {
      window.location.href = "/verify/" + data.email;
    }
    dispatch({ type: FAILURE, payload: error.response.data.err });
  }
};

export const verify = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/verify/", data);
    if (res.status === 200) {
      dispatch({
        type: SUCCESS,
        payload: "Your account has been activated, please login",
      });
      window.location.href = "/login";
    }
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.response.data.err });
  }
};

export const resend = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/resend/", data);
    if (res.status === 200) {
      dispatch({
        type: SUCCESS,
        payload: "Verification code sent, check your mail",
      });
    }
  } catch (error) {
    dispatch({ type: FAILURE, payload: error.response.data.err });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
