import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("root");

ReactDOM.render(
	<Badge
		firstName="David"
		lastName="Delgado"
		avatarUrl="https://www.gravatar.com/avatar/avatar?d=identicon"
		jobTitle="Ingeniero en Informática"
		twitter="ddelgado"
	/>,
	container
);
