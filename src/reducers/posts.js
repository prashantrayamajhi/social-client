import {
  FETCH_ALL,
  CREATE_POST,
  UPDATE_POST,
  GET_POST_BY_USER_ID,
  LIKE_POST,
  DELETE_POST,
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // UPDATE_COMMENT,
} from "./../constants/actionTypes";

const reducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload.posts;

    case GET_POST_BY_USER_ID:
      return action.payload;

    case CREATE_POST:
      return [action.payload, ...posts];

    case UPDATE_POST:
    case LIKE_POST:
      // case CREATE_COMMENT:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};

export default reducers;
