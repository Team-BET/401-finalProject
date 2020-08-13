import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import songReducer from "../reducers/songReducer";
import thunk from "./middleware/thunk.js";

let reducers = {
  musicData: songReducer,
};
const store = () =>
  createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk))
  );
export default store();
