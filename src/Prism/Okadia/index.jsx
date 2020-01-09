import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../CodeTheme/Okadia.css";

function App() {
  const [dataType, setDataType] = useState("js");
  const [previewContent, setPreviewContent] = useState(
    " EditorState.createEmpty()"
  );
  // const [newContent, setnewContent] = useState("");

  const handleChange = e => {
    console.log(e);
    setPreviewContent(`${e.target.value}`);
  };
  const onChange = previewContent => {
    console.log(previewContent);
    setPreviewContent(previewContent);
  };
  const newhandleChange = e => {
    // let element = document.getElementById("editableDiv");
    // let x = document.getElementById("editableDiv").isContentEditable;
    // console.log(element.innerHTML);
    console.log(e.target.innerText);
    // console.log(x);
    setPreviewContent(e.target.innerText);
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

  return (
    <div
      style={{
        position: "relative",
        textAlign: "left",
        boxSizing: "border-box",
        padding: 0,
        overflow: "hidden"
      }}
    >
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
            margin: 0,
            border: 0,
            background: "none",
            boxSizing: "inherit",
            display: "inherit",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontStyle: "inherit",
            fontVariantLigatures: "inherit",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            lineHeight: "inherit",
            tabSize: "inherit",
            textIndent: "inherit",
            textRendering: "inherit",
            textTransform: "inherit",
            whiteSpace: "pre-wrap",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            resize: "none",
            color: "inherit",
            overflow: "hidden",
            MozOsxFontSmoothing: "grayscale",
            WebkitFontSmoothing: "antialiased",
            WebkitTextFillColor: "transparent",
            paddingTop: 100,
            paddingRight: 100,
            paddingBottom: 100,
            paddingLeft: 100
          }}
        />
      </div>
      {/* -----------------代码view区------------------ */}

      <div>
        <ul>代码区:{dataType}</ul>

        <div style={{ width: 500, height: 400, backgroundColor: "slategray" }}>
          <pre
            aria-hidden="true"
            id="editableDiv"
            value={previewContent}
            style={{
              margin: 0,
              border: 0,
              background: "none",
              boxSizing: "inherit",
              display: "inherit",
              fontFamily: "inherit",
              fontSize: "inherit",
              fontStyle: "inherit",
              fontVariantLigatures: "inherit",
              fontWeight: "inherit",
              letterSpacing: "inherit",
              lineHeight: "inherit",
              tabSize: "inherit",
              textIndent: "inherit",
              textRendering: "inherit",
              textTransform: "inherit",
              whiteSpace: "pre-wrap",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
              position: "relative",
              pointerEvents: "none",
              paddingTop: 100,
              paddingRight: 100,
              paddingBottom: 100,
              paddingLeft: 100
            }}
          >
            {/* <div
              className={`language-${dataType}`}
              dangerouslySetInnerHTML={{ __html: previewContent }}
            /> */}
            <code className={`language-${dataType}`}>{previewContent}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
