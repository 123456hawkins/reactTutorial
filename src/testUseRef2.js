// useRef

import { useRef, useState } from "react";

export default function TestUseRef1() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  const handleClick = () => {
    prevCount.current = count;
    setCount(count + 1);
  };
  return (
    <div>
      <h3>---------测试useRefHooks2----------</h3>
      <p>最新的值：{count}</p>
      <p>上一次的值:{prevCount.current}</p>
      <button onClick={handleClick}>点我加1</button>
    </div>
  );
}
