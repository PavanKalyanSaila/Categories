// src/redux/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Default import
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// Create Redux store with thunk middleware and devtools support
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
