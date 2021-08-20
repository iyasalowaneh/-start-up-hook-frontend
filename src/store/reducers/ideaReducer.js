//actions
import * as actionTypes from "../actions/types";

const initialState = {
  ideas: [],
  ideasUser: [],
  loading: true,
};

const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_IDEA:
      return {
        ...state,
        ideas: [...state.ideas, action.payload.newIdea],
        loading: false,
      };

    case actionTypes.FETCH_IDEAS:
      return {
        ...state,
        ideas: action.payload,
        loading: false,
      };

    case actionTypes.FETCH_IDEA_USER:
      return {
        ...state,
        ideasUser: action.payload,
      };
    case actionTypes.UPDATE_IDEA:
      const fundIdea = action.payload;

      return {
        ...state,
        ideas: state.ideas.map((idea) =>
          idea.id === fundIdea.id ? fundIdea : idea
        ),
      };
    case actionTypes.DONAT_IDEA:
      const donationIdea = action.payload;

      return {
        ...state,
        ideas: state.ideas.map((idea) =>
          idea.id === donationIdea.id ? donationIdea : idea
        ),
      };
    case actionTypes.UPDATE_STATUS:
      const { updateIdea } = action.payload;

      return {
        ...state,
        ideas: state.ideas.map((idea) =>
          idea.id === updateIdea.id ? updateIdea : idea
        ),
      };
    default:
      return state;
  }
};

export default ideaReducer;
