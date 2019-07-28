import Axios from "axios";
import { SET_USER } from "../types";

export const loginUser = (userData, history) => async dispatch => {
  const res = await Axios.post("/user/login", userData);
};
export const getUserData = () => dispatch => {
  dispatch({ type: LOADING_USER });
  Axios.get("/user").then(res => {
    dispatch({
      type: SET_USER,
      payload: res.data
    });
  });
};
