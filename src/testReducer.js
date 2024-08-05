// reducer统一状态管理

import { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("none this method");
  }
}

export default function TestReducer() {
  const [state, dispatch] = useReducer(countReducer, 0);
  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  return (
    <div>
      <h3>------测试ReducerHooks--------</h3>
      <div style={{ padding: 10 }}>
        <button onClick={handleIncrement}>+</button>
        <span>{state}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}
