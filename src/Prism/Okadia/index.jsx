import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../CodeTheme/Okadia.css";

function App() {
  const [dataType, setDataType] = useState("js");
  const [previewContent, setPreviewContent] = useState("");
  // const [newContent, setnewContent] = useState("");

  const handleChange = e => {
    console.log(e);
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
  const handleSelectChange = e => {
    setDataType(`${e.target.value}`);
  };

  const js = `
const getLoader = require('prismjs/dependencies');
const components = require('prismjs/components');
const componentsToLoad = ['markup', 'css', 'php'];
const loadedComponents = ['clike', 'javascript'];
const loader = getLoader(components, componentsToLoad, loadedComponents);
  `;
  // function View() {
  //   return (
  //     <div style={{ width: 500, height: 600 }}>
  //       <pre className="line-numbers" style={{ width: 500, height: 600 }}>
  //         <code className={`language-${dataType}`}>{previewContent}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    <div style={{ display: "flex" }}>
      {/* -----------------代码input区------------------ */}
      <div>
        <div>
          <ul>
            <button onClick={handleChangeTypeJS}>JavaScript</button>
            <button onClick={handleChangeTypeCSS}>CSS</button>
            <button onClick={handleChangeTypeC}>C++</button>
            &nbsp; &ensp; &emsp; &ensp; &emsp; &nbsp; &ensp; &emsp;
            <select name="type" onChange={handleSelectChange}>
              <option value="js">JavaScript</option>
              <option value="css">CSS</option>
              <option value="c++">C++</option>
            </select>
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
        <div style={{ width: 500, height: "100%" }}>
          <pre
            contentEditable="true"
            onChange={handleChange}
            value={previewContent}
            className="line-numbers"
            style={{ width: 500, height: "100%" }}
          >
            <code className={`language-${dataType}`}>{previewContent}</code>
          </pre>
        </div>
        <div>
          <pre className="line-numbers">
            <code className="language-js">{js.trim()}</code>
          </pre>
          <pre>
            <code className="language-css">{`p { color: red }`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
