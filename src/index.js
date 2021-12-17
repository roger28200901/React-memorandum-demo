// React is like a jquery plugin
import React from "react";
// ReactDOM for render my component on the website
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
  document.getElementById("root")
);
