import { ADD, MINUS, ADD2, MINUS2 } from "./action-types";

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
  asyncAdd() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: ADD,
        });
      }, 1000);
    };
  },
  asyncAddByPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: ADD,
          payload: 2,
        });
      }, 1000);
    });
  },
  add2() {
    return {
      type: ADD2,
    };
  },
  minus2() {
    return {
      type: MINUS2,
    };
  },
};
