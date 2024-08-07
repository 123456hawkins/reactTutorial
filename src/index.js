// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test1 from "./routes/test1";
import Test2 from "./routes/test2";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoicce";
import Shoes from "./routes/shoes";
import Shoe from "./routes/shoe";

import store from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <App tab="home" /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/test1" element={<Test1></Test1>}></Route>
          <Route path="/test2" element={<Test2 />}></Route>
          <Route path="/invoices" element={<Invoices />}>
            {/* 索引路由 */}
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>请选择一张取货单</p>{" "}
                </main>
              }
            ></Route>
            <Route path=":invoiceId" element={<Invoice />}></Route>
          </Route>
          <Route path="/shoes" element={<Shoes />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>请选择鞋子品牌</p>
                </main>
              }
            />
            <Route path="shoe" element={<Shoe />} />
          </Route>
          {/* 无匹配路由 */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
