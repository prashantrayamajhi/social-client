import {
  GET_FOLLOWERS_USERS,
  GET_FOLLOWING_USERS,
} from "./../constants/actionTypes";

const initialState = {
  followers: [],
  following: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLLOWING_USERS:
      return { ...state, following: [...action.payload] };
    case GET_FOLLOWERS_USERS:
      return { ...state, followers: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
