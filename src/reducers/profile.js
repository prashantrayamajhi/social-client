import { GET_USER } from "../constants/actionTypes";

const initialState = { user: null, posts: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
