import image from "./logo.svg";
import "./App.css";
// 注意组件名一定要大写
function ChildTitle({ title, name }) {
  const imgStyle = {
    height: 100,
    width: 100,
    fontSize:11,
    border: "5px solid black",
    position:'absolute',
    top:'50%',
    left:'50%',
    background:'green'
  };
  return (
    <div style={imgStyle}>
      <p>-----我是孙子组件--------</p>
      <div>我是标题:{title}</div>
      <div>我是名字:{name}</div>
    </div >
  );
}
function Connect({ serialNum, childChildData }) {
  const imgStyle = {
    height: 500,
    width: 500,
    border: "10px solid black",
    position:'relative'
  };
  const imgData = {
    className: "img1",
    style: {
      // height: 500,
      width: 500,
      border: "10px solid black",
    },
  };
  return (
    <div className="connectPage" style={imgStyle}>
      <div>我是子组件</div>
      <p>父亲传来的序列号:{serialNum}</p>
      {/* react内置将{...imgData}解构转为对应的属性 */}
      <img src={image} alt="图片" className="img1" {...imgData}></img>
      
      {/* 注意组件名一定要大写 */}
      <ChildTitle {...childChildData}></ChildTitle>
    </div>
  );
}
export default Connect;
