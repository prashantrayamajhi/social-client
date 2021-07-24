import Axios from "./../api/server";
import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  FAILURE,
  SUCCESS,
} from "./../constants/actionTypes";

export const signup = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/signup", data);
    if (res.status === 201) {
      dispatch({ type: SIGNUP, payload: res.data.data });
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/auth/login", data);
    if (res.status === 200) {
      dispatch({
        type: SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    dispatch({ type: FAILURE, payload: error.response.data.err });
    console.log(err);
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null,
  };
};
