import React, { useEffect } from "react";
import Prism from "prismjs";
import "./Okadia.css";
// import "../Solarized/Solarized.css";

const css = `
.btn--green {
  background-color: #bada55;
}
`.trim();

const js = `
function add(a, b){
  return a + b;
}
`.trim();

function Page(props) {
  const { data, dataType } = props;
  console.log(dataType);
  useEffect(() => {
    // setTimeout(() => Prism.highlightAll(), 0);
  }, []);
  return (
    <div>
      <li>代码区:</li>
      <pre className="line-numbers">
        <code style={{ width: 300 }} className="language-js">
          {data}
        </code>
      </pre>
      <pre className="line-numbers">
        <code style={{ width: 300 }} className="language-js line-numbers">
          {js}
        </code>
      </pre>
      <pre className="line-numbers-rows">
        <code className="language-css">{css}</code>
      </pre>
    </div>
  );
  // setTimeout(() => Prism.highlightAll(), 0);
}
export default Page;
