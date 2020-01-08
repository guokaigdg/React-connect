import React, { useState, useEffect } from "react";
import Prism from "prismjs";
// import marked from "marked";
// import highlight from "highlight.js";
import "../CodeTheme/Okadia.css";

// highlight.configure({
//   tabReplace: "  ",
//   classPrefix: "hljs-",
//   languages: [
//     "CSS",
//     "HTML, XML",
//     "JavaScript",
//     "PHP",
//     "Python",
//     "Stylus",
//     "TypeScript",
//     "Markdown"
//   ]
// });
// marked.setOptions({
//   highlight(code) {
//     return highlight.highlightAuto(code).value;
//   }
// });

function App() {
  const [dataType, setDataType] = useState("");
  const [previewContent, setPreviewContent] = useState("");

  const handleChange = e => {
    console.log(`${e.target.value}`);
    setPreviewContent(`${e.target.value}`);
  };
  const handleChangeTypeJS = () => {
    setDataType(`js`);
  };
  const handleChangeTypeCSS = () => {
    setDataType(`css`);
  };
  const handleChangeTypeC = () => {
    setDataType("c");
  };
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  const js = `
const getLoader = require('prismjs/dependencies');
const components = require('prismjs/components');
const componentsToLoad = ['markup', 'css', 'php'];
const loadedComponents = ['clike', 'javascript'];
const loader = getLoader(components, componentsToLoad, loadedComponents);
  `;

  return (
    <div style={{ display: "flex" }}>
      {/* -----------------代码input区------------------ */}
      <div>
        <div>
          <ul>
            <button onClick={handleChangeTypeJS}>JavaScript</button>
            <button onClick={handleChangeTypeCSS}>CSS</button>
            <button onClick={handleChangeTypeC}>C++</button>
          </ul>
        </div>
        <textarea
          value={previewContent}
          placeholder="输入代码..."
          type="text"
          onChange={handleChange}
          style={{
            width: "500px",
            height: "100%",
            backgroundColor: "#f8f8f2"
          }}
        />
        <div
          style={{
            width: "500px"
          }}
        >
          <div>正常结果区:</div>
          {previewContent}
        </div>
      </div>
      {/* -----------------代码view区------------------ */}
      <div>
        <ul>代码区:{dataType}</ul>
        <pre className="line-numbers" style={{ width: 500, height: "100%" }}>
          <code className={`language-${dataType}`}>{previewContent}</code>
        </pre>
        <pre className="line-numbers">
          <code className="language-js">{js.trim()}</code>
        </pre>
        <pre>
          <code className="language-css">{`p { color: red }`}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
