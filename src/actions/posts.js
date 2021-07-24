import Axios from "./../api/server";
import { FETCH_ALL } from "./../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/posts");
    dispatch({ type: FETCH_ALL, payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};
