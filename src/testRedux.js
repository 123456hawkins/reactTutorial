import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/counter/counterSlice";
import { useRef } from "react";
function Child() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //   const inputValue = 0;
  const inputRef = useRef();
  return (
    <div style={{ border: "1px solid black", height: 200, width: 200 }}>
      <h3>store中的值:{count}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input ref={inputRef}></input>
      <button
        onClick={() => {
          dispatch(incrementByAmount(parseInt(inputRef.current.value)));
        }}
      >
        新增输入框的值
      </button>
    </div>
  );
}
export default function TestRedux() {
  return (
    <div style={{ border: "3px solid black", height: 600, width: 600 }}>
      <Child></Child>
      <Child></Child>
    </div>
  );
}
