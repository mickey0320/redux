// a(b(c()))
export default (...fns) => {
  return fns.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
};
