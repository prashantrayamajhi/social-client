import {
  GET_ALL,
  FETCH_ALL,
  CREATE_POST,
  UPDATE_POST,
  GET_POST_BY_USER_ID,
  LIKE_POST,
  DELETE_POST,
  POST_CREATED,
  FAILED_POST_CREATE,
} from "./../constants/actionTypes";

const initialState = { posts: [], loading: false };
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, posts: action.payload.posts, loading: false };

    case FETCH_ALL:
      return { ...state, loading: true };

    case GET_POST_BY_USER_ID:
      return { ...state, posts: action.payload, loading: false };

    case CREATE_POST:
      return { ...state, loading: true };

    case FAILED_POST_CREATE:
      return { ...state, loading: false };

    case POST_CREATED:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };

    case UPDATE_POST:
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducers;
