import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "../CodeTheme/Okadia.css";
import { Editor, EditorState } from "draft-js";

function App() {
  const [dataType, setDataType] = useState("js");
  const [previewContent, setPreviewContent] = useState(
    EditorState.createEmpty()
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
    <div style={{ display: "flex" }}>
      {/* -----------------代码input区------------------ */}
      {/* <div>
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
            width: 500,
            height: 400,
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
      </div> */}
      {/* -----------------代码view区------------------ */}

      <div>
        <ul>
          {" "}
          <button onClick={newhandleChange}>click</button>代码区:{dataType}
        </ul>
        {/* <div
          contentEditable="plaintext-only"
          id="editableDiv"
          onInput={newhandleChange}
          // onChange={newhandleChange}
          value={previewContent}
          style={{
            width: 500,
            height: 400,
            backgroundColor: "slategray"
          }}
        ></div> */}
        <div
          style={{
            width: 500,
            height: 400,
            backgroundColor: "slategray"
          }}
        >
          <Editor
            editorState={previewContent}
            handleKeyCommand={this.handleKeyCommand}
            onChange={setPreviewContent}
          >
            {previewContent}
          </Editor>
          {/* <code className="language-js">{previewContent}</code> */}
        </div>
        {/* <div style={{ width: 500, height: 400, backgroundColor: "slategray" }}>
          <pre
            // contentEditable="true"
            contentEditable="plaintext-only"
            id="editableDiv"
            onInput={newhandleChange}
            // onChange={newhandleChange}
            value={previewContent}
            style={{ width: 500, height: 400 }}
          >
            <div
              className={`language-${dataType}`}
              dangerouslySetInnerHTML={{ __html: previewContent }}
            />
            <code
              contentEditable="plaintext-only"
              onInput={newhandleChange}
              className={`language-${dataType}`}
            >
              {previewContent}
            </code>
            {/* {previewContent} */}
        {/* </pre> */}
        {/* </div>  */}
      </div>
    </div>
  );
}

export default App;
