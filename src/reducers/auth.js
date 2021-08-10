import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  LOG_IN_FAILED,
  LOGGED_IN,
  SIGN_UP_FAILED,
  SIGNED_UP,
} from "./../constants/actionTypes";

const initialState = {
  loading: false,
  authData: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNED_UP:
      return { ...state, authData: action.payload, loading: false };
    case SIGN_UP_FAILED:
      return { loading: false };
    case LOGIN:
      return { ...state, loading: true };
    case LOGGED_IN:
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("name", action.payload.name);
      return { ...state, loading: false, authData: action.payload };
    case LOG_IN_FAILED:
      return { loading: false };
    case LOGOUT:
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

export default authReducer;
