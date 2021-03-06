import {
  GET_USER,
  SUCCESS,
  FAILURE,
  GET_LOGGED_IN_USER,
} from "../constants/actionTypes";
import { checkJwtToken } from "../helpers/auth";
import config from "../helpers/config";
import Axios from "../api/server";

export const getUser = (id) => async (dispatch) => {
  checkJwtToken();
  try {
    const res = await Axios.get("/api/v1/users/profile/" + id);
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getLoggedInUser = () => async (dispatch) => {
  checkJwtToken();
  try {
    const res = await Axios.get(
      "/api/v1/users/profile/" + localStorage.getItem("id")
    );
    dispatch({
      type: GET_LOGGED_IN_USER,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateGeneralSettings = (data, id) => async (dispatch) => {
  try {
    await Axios.patch("/api/v1/users/profile/general/" + id, data, config);
    dispatch({
      type: SUCCESS,
      payload: "Account updated",
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};

export const updateProfileSettings = (data, id) => async (dispatch) => {
  try {
    await Axios.patch("/api/v1/users/profile/profile/" + id, data, config);
    dispatch({
      type: SUCCESS,
      payload: "Account updated",
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};

export const updateProfilePicture = (data, id) => async (dispatch) => {
  try {
    const res = await Axios.patch(
      "/api/v1/users/profile/picture/" + id,
      data,
      config
    );
    dispatch({
      type: SUCCESS,
      payload: "Profile picture updated",
    });
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};
