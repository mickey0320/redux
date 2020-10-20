import { ADD, MINUS } from "./action-types";

export default {
  add() {
    return {
      type: ADD,
    };
  },
  minus() {
    return {
      type: MINUS,
    };
  },
};
