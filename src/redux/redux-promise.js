export default ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.then) {
        return action.then((value) => {
          return next(value);
        });
      } else {
        return next(action);
      }
    };
  };
};
