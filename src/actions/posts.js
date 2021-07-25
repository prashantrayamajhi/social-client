import Axios from "./../api/server";
import {
  FETCH_ALL,
  FAILURE,
  SUCCESS,
  CREATE_POST,
} from "./../constants/actionTypes";

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
    if (res.status === 201) {
      dispatch({
        type: SUCCESS,
        payload: "Post created",
      });
      dispatch({ type: CREATE_POST, payload: res.data.data });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};
