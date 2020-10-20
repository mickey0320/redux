import { ADD, MINUS } from "./action-types";

const defaultState = {
  num: 1,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1,
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
};
