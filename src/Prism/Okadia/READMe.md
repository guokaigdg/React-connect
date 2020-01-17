## 一个简单的代码高亮输入组件

### 说明:

- 可以实现一边输入代码一边显示出代码高亮

### 用到第三方高亮插件 prismjs

```js
import Prism from "prismjs";
import "./styles.css";
```

### 实现方式:

- 编辑区
- 代码显示区
- 代码显示区覆盖到编辑区,造成一遍编辑一边显示的假象

```js
return (
  <div>
    <div
      style={{
        width: 1000,
        maxWidth: "100%",
        backgroundColor: "#eee8aa",
        color: "#f8f8f2",
        fontSize: "1em",
        lineHeight: 1.5,
        position: "relative",
        textAlign: "left",
        boxSizing: "border-box",
        overflow: "hidden",
        // fontSize: 18,
        height: 500
      }}
    >
      <textarea
        value={code}
        type="text"
        onChange={handleChange}
        style={{
          margin: 0,
          border: 0,
          background: "none",
          //---------继承父元素------|
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
          //---------继承父元素------|
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
          MozOsxFontSmoothing: "grayscale", //Firefox, 平滑字体, 用灰度抗锯齿渲染文本，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。
          WebkitFontSmoothing: "antialiased", //Webkit ,平滑字体,平滑像素级别的字体，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。
          WebkitTextFillColor: "transparent", //Webkit
          paddingTop: padding,
          paddingRight: padding,
          paddingBottom: padding,
          paddingLeft: padding
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
          //---------继承父元素------
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
          //---------继承父元素------
          whiteSpace: "pre-wrap", //连续的空白符会被保留。在遇到换行符或者<br>元素，或者需要为了填充「行框盒子(line boxes)」时才会换行。
          wordBreak: "keep-all", //对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
          overflowWrap: "break-word", //表示如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行。
          position: "relative",
          pointerEvents: "none", //接口代表了由 指针 引发的DOM事件的状态，包括接触点的位置，引发事件的设备类型，接触表面受到的压力等。
          paddingTop: padding,
          paddingRight: padding,
          paddingBottom: padding,
          paddingLeft: padding
        }}
      >
        <code className="language-js">{code}</code>
      </pre>
    </div>
  </div>
);
}

export default CodeEditor;
```
