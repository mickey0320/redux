export default (actionObj, dispatch) => {
  const ret = {};
  for (let key in actionObj) {
    ret[key] = (...args) => {
      return dispatch(actionObj[key](...args));
    };
  }

  return ret;
};
