import convoReducer from "./convosReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  conversations: convoReducer,
  users: userReducer,
});
export default allReducers;
