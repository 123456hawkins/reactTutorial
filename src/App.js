import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import Connect from "./connect";
import { TestSlot } from "./slot";
import { TestCtoFMoudle } from "./childToFather";
import { TestContext } from "./testContext";
import TestReducer from "./testReducer";
import TestUseRef1 from "./testUseRef1";
import TestUseRef2 from "./testUseRef2";
import TestUseRef3 from "./testUseRef3";
import TestUseEffect from "./testUseEffect";
import TestUseMemo from "./testUseMemo";
import TestUseCallBack from "./testUseCallback";
import { Link, Outlet } from "react-router-dom";
function App() {
  const divContent = "testesetse";
  const divClass = "firstClass";
  const flag = true;

  // 条件渲染
  let divContent2 = null;
  if (flag) {
    divContent2 = <span>flag为true</span>;
  } else {
    divContent2 = <span>flag为false</span>;
  }

  // 列表渲染
  const list = [
    { id: 1, name: "hawkins" },
    { id: 2, name: "zhangsan" },
    { id: 3, name: "lisi" },
  ];
  // 状态处理
  // 基本数据
  let [text, setText] = useState("测试");
  // 对象
  let [testObj, setTestObj] = useState({
    name: "test",
    title: "testTitle",
  });
  // 数组
  let [testArr, setTestArr] = useState([
    { id: 1, name: "小王" },
    { id: 2, name: "小张" },
    { id: 3, name: "小李" },
  ]);

  const listContent = list.map((item) => {
    return (
      // 当需要包裹多个标签的时候可以使用fragment组件
      <Fragment key={item.id}>
        <li>{item.name}</li>
        <li>.......</li>
      </Fragment>
    );
  });
  const testListContent = testArr.map((item) => <li key={item.id}>{item.name}</li>);
  //事件
  const handleClick = (e) => {
    // alert('dianji')
    console.log(e);
    setText("非测试");
    setTestObj({ ...testObj, title: "更换title" }); //切记,title一定要放在...testObj后面,否则会覆盖不正确
    setTestArr(testArr.filter((item) => item.name !== "小李"));
  };
  const toChildData = {
    serialNum: "12312312",
    childChildData: {
      title: "孙子标题",
      name: "孙子",
    },
  };
  const TestRouterComponet = () => {
    return (
      <div>
        <h3>-----------测试router-------------</h3>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/test1" style={{ marginRight: 10 }}>
            测试页面一
          </Link>
          <Link to="/test2" style={{ marginRight: 10 }}>
            测试页面二
          </Link>
          <Link to="/invoices" style={{ marginRight: 10 }}>
            invoice
          </Link>
          <Link to="/shoes">shoes</Link>
        </nav>
        <Outlet></Outlet>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div title={divClass}>{divContent}</div>
        {divContent2}
        <ul>{listContent}</ul>
        <button onClick={handleClick}>按钮</button>
        {/* 基本数据状态处理 */}
        <div>基本类型数据状态处理:{text}</div>
        {/* 对象数据状态处理 */}
        <div>
          对象类型状态处理:{testObj.name} {testObj.title}
        </div>
        {/* 数组数据状态处理 */}
        <p>数组数据状态处理:</p>
        <ul>{testListContent}</ul>
      </header>
      <Connect {...toChildData}></Connect>

      <TestSlot></TestSlot>
      <TestCtoFMoudle></TestCtoFMoudle>
      {/* 测试Context */}
      <TestContext></TestContext>
      {/* reactHooks */}
      <h1>------------reactHooks-----------------</h1>
      <TestReducer></TestReducer>
      <TestUseRef1></TestUseRef1>
      <TestUseRef2></TestUseRef2>
      <TestUseRef3></TestUseRef3>
      <TestUseEffect></TestUseEffect>
      <TestUseMemo></TestUseMemo>
      <TestUseCallBack></TestUseCallBack>
      <TestRouterComponet></TestRouterComponet>
    </div>
  );
}

export default App;
