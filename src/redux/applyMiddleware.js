import compose from "./compose";

export default (...middlewares) => {
  return (createStore) => {
    return (reducer) => {
      const store = createStore(reducer);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
  };
};

//logger thunk
