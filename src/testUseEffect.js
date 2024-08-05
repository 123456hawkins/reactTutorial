import { useEffect, useState } from "react";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  //监听count
  //   这种写法报错，想要监听上一次的值，只能使用useRef
  //   useEffect(
  //     (newVal, oldVal) => {
  //       console.log("count变化", newVal, oldVal);
  //     },
  //     [count]
  //   );
  useEffect(() => {
    console.log("count变化", count);
  }, [count]);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      <h3>---------useEffectHooks---------</h3>
      <button onClick={handleIncrement}>+</button>
      <span>{count}</span>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
