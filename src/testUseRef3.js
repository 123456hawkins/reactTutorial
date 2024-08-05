// useRef

import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef(function (props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    // 调用子组件方法
    childFn: (faTherText) => {
      console.log("子组件方法");
      inputRef.current.focus();
      inputRef.current.value = faTherText;
    },
  }));
  return (
    <div style={{ width: 300, height: 100, border: "1px solid black" }}>
      <input ref={inputRef}></input>
    </div>
  );
});
export default function TestUseRef3() {
  const handleClick = () => {
    // 一定要写current
    childRef.current.childFn("父组件传来的值");
  };
  const childRef = useRef();
  return (
    <div>
      <h3>---------测试useRefHooks3----------</h3>
      <Child ref={childRef}></Child>
      <button onClick={handleClick}>测试子组件输入框</button>
    </div>
  );
}
