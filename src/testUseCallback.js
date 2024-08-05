import { memo, useCallback, useState } from "react";
const ChildComponet = memo(function ({ onClick }) {
  console.log("button渲染");
  return <button onClick={onClick}>子组件</button>;
});
export default function TestUseCallBack() {
  console.log("父组件更新");

  const [count, setCount] = useState(0);
  //   当依赖数组发生变更的时候才执行
  const handleClick = useCallback(() => {
    console.log("点击按钮");
  }, []);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>--------testUseCallBack----------</h3>
      <div style={{ height: 300, width: 500, border: "2px solid black" }}>
        <p>父组件</p>
        <br></br>
        <span>count的值为:{count}</span>
        <br></br>
        <button onClick={handleIncrement}>点我更新</button>
        <br></br>
        <ChildComponet onClick={handleClick}></ChildComponet>
      </div>
    </div>
  );
}
