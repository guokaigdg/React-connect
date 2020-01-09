import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import { highlight, languages } from "prismjs/components/prism-core";
import "../CodeTheme/Okadia.css";

function App() {
  const [code, setCode] = useState("");
  const handleChange = e => {
    console.log(e);
    setCode(`${e.target.value}`);
  };

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0);
  });

  const highlighted = code => {
    highlight(code, languages.jsx);
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
          textAlign: "left",
          boxSizing: "border-box",
          padding: 0,
          overflow: "hidden"
          // style?: {},
        }}
      >
        {/* -----------------代码input区------------------ */}

        <textarea
          value={code}
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
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            backgroundColor: "pink"
          }}
        />
        <pre
          aria-hidden="true"
          id="editableDiv"
          value={code}
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
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 10
            // backgroundColor: "pink"
          }}
          {...(typeof highlighted === "string"
            ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } }
            : { children: highlighted })}
        >
          <code className="language-js">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
