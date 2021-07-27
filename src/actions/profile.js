import { GET_USER } from "../constants/actionTypes";
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
