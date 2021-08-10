import {
  GET_POST_BY_ID,
  CREATE_COMMENT,
  // UPDATE_COMMENT,
  DELETE_COMMENT,
  FAILURE,
  FETCH_POST,
} from "./../constants/actionTypes";
import config from "./../helpers/config";
import Axios from "./../api/server";

export const getPostById = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_POST,
  });
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

export const postComment = (data) => async (dispatch) => {
  try {
    const res = await Axios.post("/api/v1/posts/comment", data, config);
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const updateComment = (id) => async (dispatch) => {
  try {
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const deleteComment = (postId, commentId, id) => async (dispatch) => {
  try {
    await Axios.get(
      "/api/v1/posts/comment/" + postId + "/" + commentId + "/" + id,
      config
    );
    const res = await Axios.get("/api/v1/posts/" + postId, config);
    dispatch({
      type: DELETE_COMMENT,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.error,
    });
  }
};
