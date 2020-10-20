export default ({ getState, dispatch }) => {
  return (next) => {
    return (action) => {
      console.log("logger:" + JSON.stringify(getState()));
      return next(action);
    };
  };
};
