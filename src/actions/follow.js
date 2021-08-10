import Axios from "./../api/server";
import {
  FAILURE,
  GET_USER,
  GET_FOLLOWERS_USERS,
  GET_FOLLOWING_USERS,
  FETCH_FOLLOWERS_USERS,
  FETCH_FOLLOWING_USERS,
} from "./../constants/actionTypes";
import config from "./../helpers/config";

export const getFollowingUsers = (userId) => async (dispatch) => {
  dispatch({
    type: FETCH_FOLLOWING_USERS,
  });
  try {
    const res = await Axios.get("/api/v1/users/following/" + userId, config);
    dispatch({
      type: GET_FOLLOWING_USERS,
      payload: res.data.data.following,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};

export const getFollowersUsers = (userId) => async (dispatch) => {
  dispatch({
    type: FETCH_FOLLOWERS_USERS,
  });
  try {
    const res = await Axios.get("/api/v1/users/followers/" + userId, config);
    dispatch({
      type: GET_FOLLOWERS_USERS,
      payload: res.data.data.followers,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};

export const followUser = (userId, id) => async (dispatch) => {
  const data = { userId };
  try {
    await Axios.post("/api/v1/users/follow", data, config);
    const res = await Axios.get("/api/v1/users/profile/" + id);
    const following = await Axios.get("/api/v1/users/following/" + id, config);
    const followers = await Axios.get("/api/v1/users/followers/" + id, config);
    dispatch({
      type: GET_FOLLOWING_USERS,
      payload: following.data.data.following,
    });
    dispatch({
      type: GET_FOLLOWERS_USERS,
      payload: followers.data.data.followers,
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

export const unfollowUser = (userId, id) => async (dispatch) => {
  const data = { userId };
  try {
    await Axios.post("/api/v1/users/unfollow", data, config);
    const res = await Axios.get("/api/v1/users/profile/" + id);
    const following = await Axios.get("/api/v1/users/following/" + id, config);
    const followers = await Axios.get("/api/v1/users/followers/" + id, config);
    dispatch({
      type: GET_FOLLOWING_USERS,
      payload: following.data.data.following,
    });
    dispatch({
      type: GET_FOLLOWERS_USERS,
      payload: followers.data.data.followers,
    });
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};
