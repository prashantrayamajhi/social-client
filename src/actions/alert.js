import { SUCCESS, FAILURE, CLEAR } from "./../constants/actionTypes";

export const success = (message) => {
  return { type: SUCCESS, message };
};

export const failure = (message) => {
  return { type: FAILURE, message };
};

export const clear = (message) => {
  return { type: CLEAR, message };
};
