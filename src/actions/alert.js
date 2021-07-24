import { SUCCESS, FAILURE, CLEAR } from "./../constants/actionTypes";

export const success = (message) => {
  return { type: SUCCESS, payload: message };
};

export const failure = (message) => {
  return { type: FAILURE, payload: message };
};

export const clear = () => {
  return { type: CLEAR };
};
