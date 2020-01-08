import React, { useState } from "react";
// import Solarized from "./Prism/Solarized/Solarized";
// import Input from "./Prism/Input";
import Okadia from "./Prism/Okadia/Okadia.jsx";
const ABC = `import React, { useState } from "react";
// import Solarized from "./Prism/Solarized/Solarized";
// import Input from "./Prism/Input";
import Okadia from "./Prism/Okadia/Okadia.jsx";
import Highlight from "./Highlight/index";
const ABC = "import React from react";
function App() {
  const [data, setData] = useState("");

  };
  return (
    <div style={{ display: "flex" }}>
      {/* <Solarized /> */}
      类型:
      <button onClick={handleChangeTypeJS}>JavaScript</button>
      <button onClick={handleChangeTypeCSS}>CSS</button>
      <button onClick={handleChangeTypeC}>C++</button>
      <input
        value={data}
        placeholder="代码..."
        onChange={handleChange}
        style={{ width: "300px" }}
      ></input>
      {/* </div> */}
      <Okadia data={ABC} />
      {/* <Highlight data={ABC} /> */}
    </div>
  );
}
export default App;`;

function App() {
  const [data, setData] = useState("");
  const [dataType, setDataType] = useState("");
  const handleChange = e => {
    console.log(e.target.value);
    setData(e.target.value);
  };
  const handleChangeTypeJS = () => {
    setDataType(`import React from react `);
  };
  const handleChangeTypeCSS = () => {
    setDataType(`p { color: red }`);
    console.log("--->");
    // console.log(dataType);
  };
  const handleChangeTypeC = () => {
    setDataType("import React from react");
  };
  return (
    <div style={{ display: "flex" }}>
      {/* <Solarized /> */}
      类型:
      <button onClick={handleChangeTypeJS}>JavaScript</button>
      <button onClick={handleChangeTypeCSS}>CSS</button>
      <button onClick={handleChangeTypeC}>C++</button>
      <input
        value={data}
        placeholder="代码..."
        onChange={handleChange}
        style={{ width: "300px" }}
      ></input>
      {/* </div> */}
      <Okadia data={ABC} />
    </div>
  );
}
export default App;
