import {
  GET_FOLLOWERS_USERS,
  GET_FOLLOWING_USERS,
  FETCH_FOLLOWERS_USERS,
  FETCH_FOLLOWING_USERS,
} from "./../constants/actionTypes";

const initialState = {
  followers: [],
  following: [],
  loading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOLLOWERS_USERS:
    case FETCH_FOLLOWING_USERS:
      return { followers: [], following: [], loading: true };
    case GET_FOLLOWING_USERS:
      return { ...state, following: [...action.payload], loading: false };
    case GET_FOLLOWERS_USERS:
      return { ...state, followers: [...action.payload], loading: false };
    default:
      return state;
  }
};

export default reducer;
