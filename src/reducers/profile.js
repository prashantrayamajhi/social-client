import { GET_USER, GET_LOGGED_IN_USER } from "../constants/actionTypes";

const initialState = { user: null, loggedInUser: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload };
    default:
      return state;
  }
};

export default reducer;
