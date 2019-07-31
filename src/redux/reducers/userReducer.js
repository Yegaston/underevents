import { SET_USER, SET_ERRORS, CLEAR_ERRORS } from "../types";

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
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    default:
      return { ...state };
  }
}
