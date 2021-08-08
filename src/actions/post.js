import { GET_POST_BY_ID } from "./../constants/actionTypes";
import config from "./../helpers/config";
import Axios from "./../api/server";

export const getPostById = (id) => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts/" + id, config);
    dispatch({
      type: GET_POST_BY_ID,
      payload: res.data.data,
    });
  } catch (error) {
    window.location.href = "/";
  }
};
