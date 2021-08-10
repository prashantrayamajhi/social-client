import Axios from "./../api/server";
import {
  FETCH_ALL,
  GET_POST_BY_USER_ID,
  FAILURE,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  LIKE_SINGLE_POST,
  DELETE_POST,
  POST_CREATED,
  FAILED_POST_CREATE,
} from "./../constants/actionTypes";
import config from "./../helpers/config";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts", config);
    dispatch({ type: FETCH_ALL, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const getPostsByUserId = (id) => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts/userPosts/" + id, config);
    dispatch({ type: GET_POST_BY_USER_ID, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_POST,
  });
  try {
    const res = await Axios.post("/api/v1/posts", data, config);
    if (res.status === 201) {
      dispatch({ type: POST_CREATED, payload: res.data.data });
    }
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
    dispatch({
      type: FAILED_POST_CREATE,
    });
  }
};

export const updatePost = (title, id) => async (dispatch) => {
  const data = { title };
  try {
    const res = await Axios.patch("/api/v1/posts/" + id, data, config);
    dispatch({
      type: UPDATE_POST,
      payload: res.data.data,
    });
    window.location.reload();
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const deletePost = (id, isSinglePost) => async (dispatch) => {
  try {
    await Axios.delete("/api/v1/posts/" + id, config);
    if (isSinglePost) {
      window.location.reload();
    } else {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    }
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const likePost = (id, isSinglePost) => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts/like/" + id, config);
    if (isSinglePost) {
      dispatch({
        type: LIKE_SINGLE_POST,
        payload: res.data.data,
      });
    } else {
      dispatch({
        type: LIKE_POST,
        payload: res.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};
