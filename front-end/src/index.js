import React from "react";
import ReactDom from "react-dom";
import /* App, */ { NavFooter, NavBar } from "./App";

ReactDom.render(<NavBar />, document.getElementById("navBar"));
ReactDom.render(<NavFooter />, document.getElementById("footer"));