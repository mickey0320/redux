export default ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      if (typeof action === "function") {
        console.log("thunk");
        return action(dispatch, getState);
      } else {
        return next(action);
      }
    };
  };
};
