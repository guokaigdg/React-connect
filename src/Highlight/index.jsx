import React from "react";
// import marked from "marked";
import highlight from "highlight.js";
// import "highlight.js/styles/default.css";
// import "./highlight/styles/dark.css";
// import javascript from "highlight.js/lib/languages/javascript";
// highlight.registerLanguage("javascript", javascript);

function App(props) {
  const { data } = props;
  // console.log(data);
  // marked.setOptions({
  //   renderer: new marked.Renderer(),
  //   gfm: true,
  //   pedantic: false,
  //   sanitize: false,
  //   tables: true,
  //   breaks: true,
  //   smartLists: true,
  //   smartypants: true,
  //   highlight: function(code) {
  //     return highlight.highlightAuto(code).value;
  //   }
  // });

  return (
    <div>
      <pre>
        <code className="language-js">{data}</code>
      </pre>

      <pre>
        <code className="language-js">
          {`import React from "react";
    function App(){
      let a = 100
    }
    export default App;`}
        </code>
      </pre>
      {/* 
      <div
        dangerouslySetInnerHTML={{
          __html: marked(this.props.docContent, {
            renderer: new marked.Renderer()
          })
        }}
      ></div> */}
    </div>
  );
}
export default App;
