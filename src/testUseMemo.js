import { useMemo, useState } from "react";
function DoSomeMath({ value }) {
  console.log("子组件更新");

  //没使用缓存写法,当父组件更新，每次都要重新运行
  //   const result = () => {
  //     console.log("result方法执行");
  //     let result = 0;
  //     for (let i = 0; i < 100000; i++) {
  //       result += value * 2;
  //     }
  //     return result;
  //   };

  // 只有当value发生变更result函数才会执行，否则一直使用上次缓存的值
  const result = useMemo(() => {
    console.log("result方法执行");

    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += value * 2;
    }
    return result;
  }, [value]);
  return (
    <div style={{ height: 100, width: 300, border: "1px solid black" }}>
      <p>子组件</p>
      <div>输入内容:{value}</div>
      <div>经过计算内容:{result}</div>
    </div>
  );
}
export default function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>-------testUseMemoHooks---------</h3>
      <div style={{ height: 300, width: 500, border: "2px solid black" }}>
        <p>父组件</p>
        <br></br>
        <span>count的值为:{count}</span>
        <br></br>
        <button onClick={handleIncrement}>点我更新</button>
        <br></br>
        <input
          type="number"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        ></input>
        <DoSomeMath value={inputVal}></DoSomeMath>
      </div>
    </div>
  );
}
