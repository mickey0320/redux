import React, { useEffect, useState } from "react";
import { bindActionCreators } from "./redux";

import store from "./store2";
import actions from "./store2/actions";
const bindedActions = bindActionCreators(actions, store.dispatch);

export default () => {
  console.log(store.getState());
  const [num, setNum] = useState(store.getState().moduleA.num);
  const [num2, setNum2] = useState(store.getState().moduleB.num);
  useEffect(() => {
    store.subscribe(() => {
      setNum(store.getState().moduleA.num);
      setNum2(store.getState().moduleB.num);
    });
  }, []);
  return (
    <div>
      <div className="div1">
        <div>{num}</div>
        <button onClick={bindedActions.add}>+1</button>
        <button onClick={bindedActions.minus}>-1</button>
        <button onClick={bindedActions.asyncAdd}>异步加1</button>
        <button onClick={bindedActions.asyncAddByPromise}>异步加2</button>
      </div>
      <div className="div2">
        <div>{num2}</div>
        <button onClick={bindedActions.add2}>+1</button>
        <button onClick={bindedActions.minus2}>-1</button>
      </div>
    </div>
  );
};
