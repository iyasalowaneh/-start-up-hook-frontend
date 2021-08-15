// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// actions
import { checkForToken } from "./actions/authAction";
import { fetchIdeas } from "./actions/ideaAction";
import { fetchUsers } from "./actions/usersListAction";

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

export default store;
