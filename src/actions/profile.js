import { GET_USER, SUCCESS, FAILURE } from "../constants/actionTypes";
import { checkJwtToken } from "../helpers/auth";
import config from "../helpers/config";
import Axios from "../api/server";

export const getUser = () => async (dispatch) => {
  checkJwtToken();
  const id = localStorage.getItem("id");
  try {
    const res = await Axios.get("/api/v1/users/profile/" + id, config);
    dispatch({
      type: GET_USER,
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
