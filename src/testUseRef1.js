// useRef

import { useRef } from "react";

export default function TestUseRef2() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = "使用useRef自动填充值";
  };
  return (
    <div>
      <h3>---------测试useRefHooks1----------</h3>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>填充值</button>
    </div>
  );
}
