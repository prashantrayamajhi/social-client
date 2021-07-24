import { SUCCESS, FAILURE, CLEAR } from "./../constants/actionTypes";

const initialState = { type: "", message: "" };
const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return { ...state, type: "success", message: action.payload };
    case FAILURE:
      return { ...state, type: "error", message: action.payload };
    case CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
