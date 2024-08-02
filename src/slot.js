// 子传父,类似vue中的slot
function List({ children,title,footer=<div>默认底部</div> }) {
  return (
    <>
    <h2>{title}</h2>
    {/* 匿名插槽 */}
      <ul>{children}</ul>
      {/* 具名插槽 */}
        <div>{footer}</div>
    </>
  );
}
export function TestSlot() {
  return (
    <div style={{ width: 500, height: 500, marginTop: 20, border: "8px solid black" }}>
      <p>------测试slot-------</p>
      <List title="列表一" footer={<p>底部测试1</p>}>
        <li>测试数据</li>
        <li>测试数据</li>
        <li>测试数据</li>
        <li>测试数据</li>
      </List>
      <List title="列表二" footer={<p>底部测试2</p>}>
        <li>测试数据</li>
        <li>测试数据</li>
        <li>测试数据</li>
        <li>测试数据</li>
      </List>
    </div>
  );
}
