export default (reducer, initialState) => {
  let state = initialState;
  let listeners = [];
  function dispatch(action) {
    state = reducer(state, action);
    for (let listener of listeners) {
      listener();
    }
    return action;
  }
  function subscribe(fn) {
    listeners.push(fn);

    return () => {
      listeners = listeners.filter((listener) => listener !== fn);
    };
  }
  function getState() {
    return state;
  }

  dispatch({ type: "@INIT" });

  return {
    dispatch,
    getState,
    subscribe,
  };
};
