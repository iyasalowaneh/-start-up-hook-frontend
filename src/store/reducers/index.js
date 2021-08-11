
// redux
import { combineReducers } from "redux";

// actions
import authReducer from "./authReducer";
const rootReducer = combineReducers({

  users: authReducer,

});
export default rootReducer;
