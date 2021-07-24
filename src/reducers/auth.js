import { LOGIN, LOGOUT, SIGNUP } from "./../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, authData: action.payload };
    case LOGIN:
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("name", action.payload.name);
      return { ...state, authData: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
