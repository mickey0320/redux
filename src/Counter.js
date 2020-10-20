import React, { useEffect, useState } from "react";
import { bindActionCreators } from "./redux";

import store from "./store";
import actions from "./store/actions";
const bindedActions = bindActionCreators(actions, store.dispatch);

export default () => {
  const [num, setNum] = useState(store.getState().num);
  useEffect(() => {
    store.subscribe(() => {
      setNum(store.getState().num);
    });
  }, []);
  return (
    <div>
      <div>{num}</div>
      <button onClick={bindedActions.add}>+1</button>
      <button onClick={bindedActions.minus}>-1</button>
    </div>
  );
};
