import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

const initialState = {};

const reducers = combineReducers({});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
