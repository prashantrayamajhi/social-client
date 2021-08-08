import { GET_POST_BY_ID } from "./../constants/actionTypes";

const reducer = (post = null, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      return action.payload;
    default:
      return post;
  }
};

export default reducer;
