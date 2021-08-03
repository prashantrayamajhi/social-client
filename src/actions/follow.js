import Axios from "./../api/server";
import {
  SUCCESS,
  FAILURE,
  GET_FOLLOWERS_USERS,
  GET_FOLLOWING_USERS,
} from "./../constants/actionTypes";
import config from "./../helpers/config";

export const getFollowingUsers = (userId) => async (dispatch) => {
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

export const followUser = (userId) => async (dispatch) => {
  const data = { userId };
  try {
    const res = await Axios.post("/api/v1/users/follow", data, config);
    console.log(res);
    dispatch({
      type: SUCCESS,
      payload: "Followed user",
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILURE,
      payload: error.response.data.err,
    });
  }
};
