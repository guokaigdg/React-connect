import React from "react";
import Prism from "prismjs";
import "./Solarized.css";

const css = `
.btn--green {
  background-color: #bada55;
}
`.trim();
const js = `
import React from "react";
import Prism from "prismjs";
import "../prism.css";
const css = 
`.trim();
const c = `
include <stdio.h>
include <map>
int a = 10;
int cc
`.trim();
class Page extends React.Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0);
  }
  render() {
    return (
      <div>
        <pre className="line-numbers">
          <code className="language-css">{css}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-js">{js}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-css">{c}</code>
        </pre>
      </div>
    );
  }
  // setTimeout(() => Prism.highlightAll(), 0);
}
export default Page;
