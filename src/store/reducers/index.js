// redux
import { combineReducers } from "redux";

// actions
import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";
import userListReducer from "./userListReducer";
const rootReducer = combineReducers({
  user: authReducer,
  ideas: ideaReducer,
  users: userListReducer,
  ideasUser:ideaReducer
});
export default rootReducer;
