import convoReducer from "./convosReducer";
import userReducer from "./userReducer";
import designReducer from "./designReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  conversations: convoReducer,
  users: userReducer,
  mobileVisibility: designReducer,
});
export default allReducers;
