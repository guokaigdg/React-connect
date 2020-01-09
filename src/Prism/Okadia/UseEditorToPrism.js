import React from "react";
// import Editor from "react-simple-code-editor";
import Editor from "../../Editor/index";
import dedent from "dedent";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "./styles.css";

require("prismjs/components/prism-jsx");

type State = {
  code: string
};

class App extends React.Component<{}, State> {
  state = {
    code: dedent`
    import React from "react";
    import ReactDOM from "react-dom";

    `
  };

  render() {
    return (
      <main className="container">
        <div className="container__content">
          <div className="container_editor_area">
            <Editor
              className="container__editor"
              placeholder="请输入代码..."
              value={this.state.code}
              onValueChange={code => this.setState({ code })}
              highlight={code => highlight(code, languages.jsx)}
              padding={100}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
