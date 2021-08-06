import Axios from "./../api/server";
import { FETCH_ALL, FAILURE, CREATE_POST } from "./../constants/actionTypes";
import config from "./../helpers/config";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts");
    dispatch({ type: FETCH_ALL, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (data, config) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/posts", data, config);
    dispatch({ type: CREATE_POST, payload: res.data.data });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await Axios.delete("/api/v1/posts/" + id, config);
    window.location.reload();
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};
