import {
  FETCH_POST,
  GET_POST_BY_ID,
  LIKE_SINGLE_POST,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from "./../constants/actionTypes";

const initialState = { post: null, loading: false };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, post: null, loading: true };
    case GET_POST_BY_ID:
    case CREATE_COMMENT:
    case DELETE_COMMENT:
      return { post: action.payload, loading: false };
    case LIKE_SINGLE_POST:
      console.log(state.post._id, action.payload._id);
      return {
        post:
          state.post._id === action.payload._id ? action.payload : state.post,
      };
    default:
      return state;
  }
};

export default reducer;
