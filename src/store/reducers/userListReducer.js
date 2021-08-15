import * as types from "../actions/types";

const initialState = {
  users: [],
};

const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
      };

    default:
      return state;
  }
};

export default userListReducer;
