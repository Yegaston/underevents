import Axios from "axios";
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, CLEAR_USER_STATE } from "../types";
import jwtDecode from "jwt-decode";

export const loginUser = (userData, history) => async dispatch => {
  try {
    const res = await Axios.post("/user/login", userData);
    const token = res.data.idToken;
    setAuthorizationHeader(token);
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (err) {
    console.log(err);
    if (err.response.status === 400 || err.response.status === 500) {
      dispatch({
        type: SET_ERRORS,
        payload: {
          errors: "Something go wrong, check the email and password"
        }
      });
    }
  }
};

export const registerUser = (userData, history) => async dispatch => {
  try {
    const res = await Axios.post("/user/register", userData);
    console.log(res);
    const token = res.data.token;
    setAuthorizationHeader(token);
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (err) {
    console.log(err);
    if (err.response.status === 400 || err.response.status === 500) {
      dispatch({
        type: SET_ERRORS,
        payload: {
          errors: "Something go wrong, check the information"
        }
      });
    }
  }
};

export const decodedTokenAndSetState = () => async dispatch => {
  const token = localStorage.getItem("FBIdToken");
  const FBIdToken = `Bearer ${token}`;
  Axios.defaults.headers.common["Authorization"] = FBIdToken;

  const decodeToken = jwtDecode(token);

  const exp = decodeToken.exp;
  const res = await Axios.get("/user");
  const send = {
    credentials: {
      ...res.data
    },
    exp
  };

  dispatch({
    type: SET_USER,
    payload: send
  });
};

export const LogOut = () => async dispatch => {
  dispatch({
    type: CLEAR_USER_STATE
  });
  localStorage.removeItem("FBIdToken");
};

const setAuthorizationHeader = token => {
  localStorage.setItem("FBIdToken", token);
  console.log(jwtDecode(token));
  const FBIdToken = `Bearer ${token}`;
  Axios.defaults.headers.common["Authorization"] = FBIdToken;
};

export const getUserData = () => async dispatch => {
  const res = await Axios.get("/user");
  const credentials = {
    credentials: {
      ...res.data
    }
  };
  dispatch({
    type: SET_USER,
    payload: credentials
  });
};
