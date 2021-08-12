//actions
import * as actionTypes from "../actions/types";

const initialState = {
  ideas: [],
};

const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.CREATE_IDEA:
      return {
        ...state,
        ideas: [...state.ideas, action.payload.newIdea],
      };

      case actionTypes.FETCH_IDEAS:
      return {
        ...state,
        ideas: action.payload,
      };
      

    default:
      return state;
  }
};

export default ideaReducer;
