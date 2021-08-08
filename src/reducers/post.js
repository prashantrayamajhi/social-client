import { GET_POST_BY_ID, LIKE_SINGLE_POST } from "./../constants/actionTypes";

const reducer = (post = null, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      return action.payload;
    case LIKE_SINGLE_POST:
      return post._id === action.payload._id ? action.payload : post;
    default:
      return post;
  }
};

export default reducer;
