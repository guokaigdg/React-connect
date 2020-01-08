import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  useEffect(() => {
    console.log("Index 加载------");
    return () => {
      console.log("Index 卸载=======");
    };
  }, []); //
  return <h3> nihao </h3>;
}
function List() {
  useEffect(() => {
    console.log("list 加载");
  }, []);
  return <h3> List </h3>;
}

function Example() {
  const [count, setCount] = useState(0);
  const [newCount, setnewCount] = useState(0);
  useEffect(() => {
    console.log("Example 加载");
    return () => {
      console.log("Example 销毁 =======");
    };
  }, []); //useEffect 第二个参数的使用 当count发生变化时候才执行Example 销毁 =======
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
      <span>{newCount}</span>
      <Router>
        <div>
          <Link to="/">首页</Link>
        </div>
        <div>
          <Link to="/list">列表</Link>
        </div>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}
export default Example;
