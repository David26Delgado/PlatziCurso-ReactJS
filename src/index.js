import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
// import Badge from "./components/Badge";
// import BadgeNew from "./pages/BadgeNew";
import Badges from "./pages/Badges";

const container = document.getElementById("root");

ReactDOM.render(<Badges />, container);
