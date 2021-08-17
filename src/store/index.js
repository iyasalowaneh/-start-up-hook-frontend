// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// actions
import { checkForToken } from "./actions/authAction";
import { fetchIdeas, fetchIdeaUser } from "./actions/ideaAction";
import { fetchUsers } from "./actions/usersListAction";
import { fetchMessage } from "./actions/messageActions";
// reducers
import rootReducer from "./reducers/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(fetchIdeas());
store.dispatch(fetchUsers());
store.dispatch(fetchIdeaUser());
store.dispatch(fetchMessage());
export default store;
