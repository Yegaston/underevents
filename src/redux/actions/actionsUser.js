import Axios from "axios";
import { SET_USER } from "../types";

export const loginUser = (userData, history) => async dispatch => {
  try {
    const res = await Axios.post("/user/login", userData);
    const token = res.data.idToken;
    setAuthorizationHeader(token);
    dispatch(getUserData());
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};
export const getUserData = () => async dispatch => {
  const res = await Axios.get("/user");
  console.log(res);
  dispatch({
    type: SET_USER,
    payload: res.data
  });
};

const setAuthorizationHeader = token => {
  localStorage.setItem("FBIdToken", `Bearer ${token}`);
  const FBIdToken = `Bearer ${token}`;
  Axios.defaults.headers.common["Authorization"] = FBIdToken;
};
