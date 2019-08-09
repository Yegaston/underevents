import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_USER_STATE,
  SET_AUTH
} from "../types";

const initialState = {
  auth: false,
  credentials: {},
  errors: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload,
        auth: true
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
    case CLEAR_USER_STATE:
      return {
        ...initialState
      };
    case SET_AUTH:
      return {
        ...state,
        auth: true
      };
    default:
      return { ...state };
  }
}
