// redux
import { combineReducers } from "redux";

// reducers
import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";
import userListReducer from "./userListReducer";
import messageReducer from "./messageReducer";
const rootReducer = combineReducers({
	user: authReducer,
	ideas: ideaReducer,
	users: userListReducer,
	ideasUser: ideaReducer,
	messages: messageReducer,
	donorUser: ideaReducer,
});
export default rootReducer;
