
// redux
import { combineReducers } from "redux";

// actions
import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";
const rootReducer = combineReducers({

  users: authReducer,
  ideas:ideaReducer,

});
export default rootReducer;
