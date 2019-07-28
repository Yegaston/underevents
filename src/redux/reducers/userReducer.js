import { SET_USER } from "../types";

const initialState = {
  email: "",
  user: "",
  username: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
}
