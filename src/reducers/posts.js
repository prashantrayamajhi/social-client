import { FETCH_ALL, CREATE_POST } from "./../constants/actionTypes";

const reducers = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload.posts;

    case CREATE_POST:
      return [action.payload, ...posts];

    default:
      return posts;
  }
};

export default reducers;
