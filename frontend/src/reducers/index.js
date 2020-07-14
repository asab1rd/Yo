import convoReducer from "./convosReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  convoReducer,
  userReducer,
});
export default allReducers;
