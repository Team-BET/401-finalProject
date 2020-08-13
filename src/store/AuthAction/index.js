import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './usersReducer.js';
import thunk from './middleware/thunk.js';
import userReducer from './usersReducer.js';

let reducers = {
  users: userReducer,
}

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();