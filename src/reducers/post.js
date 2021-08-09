import {
  GET_POST_BY_ID,
  LIKE_SINGLE_POST,
  CREATE_COMMENT,
  // DELETE_COMMENT,
} from "./../constants/actionTypes";

const reducer = (post = null, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      return action.payload;
    case LIKE_SINGLE_POST:
      return post._id === action.payload._id ? action.payload : post;
    case CREATE_COMMENT:
      return action.payload;
    // case DELETE_COMMENT:
    //   return post.comments.filter((comment) => comment._id !== action.payload);
    default:
      return post;
  }
};

export default reducer;
