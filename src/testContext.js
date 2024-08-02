//provider例子
import { createContext, useContext } from "react";
const LevelContext = createContext(1);
// 不用createContext
// function Heading({ level, children }) {
//   switch (level) {
//     case 1:
//       return <h1>{children}</h1>;
//     case 2:
//       return <h2>{children}</h2>;
//     case 3:
//       return <h3>{children}</h3>;
//     case 4:
//       return <h4>{children}</h4>;
//     case 5:
//       return <h5>{children}</h5>;
//     case 6:
//       return <h6>{children}</h6>;
//     default:
//       throw Error("未知的 level：" + level);
//   }
// }

// function Section({ children }) {
//   return (
//     <section style={{ border: "1px solid black", padding: 10 }} className="section">
//       {children}
//     </section>
//   );
// }

// export function TestContext() {
//   return (
//     <div style={{ width: 800, border: "5px solid black" }}>
//       <Section>
//         <Heading level={1}>主标题</Heading>
//         <Section>
//           <Heading level={2}>副标题</Heading>
//           <Heading level={2}>副标题</Heading>
//           <Section>
//             <Heading level={3}>子子子标题</Heading>
//             <Heading level={3}>子子子标题</Heading>
//             <Section>
//               <Heading level={6}>子子子子标题</Heading>
//             </Section>
//           </Section>
//         </Section>
//       </Section>
//     </div>
//   );
// }

// 使用createContext
function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的 level：" + level);
  }
}

function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section style={{ border: "1px solid black", padding: 10 }} className="section">
      {/* 使用<LevelContext...包裹 */}
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </section>
  );
}

export function TestContext() {
  return (
    <div style={{ width: 800, border: "5px solid black" }}>
      <Section>
        <Heading>主标题</Heading>
        <Section>
          <Heading>副标题</Heading>
          <Heading>副标题</Heading>
          <Section>
            <Heading>子子子标题</Heading>
            <Heading>子子子标题</Heading>
            <Section>
              <Heading>子子子子标题</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
