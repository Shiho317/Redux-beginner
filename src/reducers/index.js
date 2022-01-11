import counterReducer from "./counter";
import loggingReducer from "./logging";
import { combineReducers } from "redux";

const reducersReducer = combineReducers({
  counter: counterReducer,
  isLogin: loggingReducer
});

export default reducersReducer;