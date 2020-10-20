export default (reducerMap) => {
  return (state = {}, action) => {
    const nextState = {};
    Object.keys(reducerMap).forEach((key) => {
      const previousStateForKey = state[key];
      const nextStateForKey = reducerMap[key](previousStateForKey, action);
      nextState[key] = nextStateForKey;
    });

    return nextState;
  };
};
