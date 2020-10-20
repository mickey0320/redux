import { ADD2, MINUS2 } from "../../store2/action-types";

const defaultState = {
  num: 0,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        num: state.num + 1,
      };
    case MINUS2:
      return {
        ...state,
        num: state.num - 1,
      };
  }
  return state;
};
