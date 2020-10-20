import { ADD, MINUS } from "../../store2/action-types";

const defaultState = {
  num: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + (action.payload === undefined ? 1 : action.payload),
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1,
      };
  }
  return state;
};
