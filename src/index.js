import React from "react";
import ReactDOM from "react-dom";
import "index.css";

function HelloWorld(props) {
  return <h1>Hello World again</h1>;
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
