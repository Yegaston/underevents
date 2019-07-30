import { SET_USER, SET_ERRORS } from "../types";

const initialState = {
  email: "",
  username: "",
  errors: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
}
