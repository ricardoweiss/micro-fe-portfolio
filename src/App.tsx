import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Home from "presentation/pages/Home/Home";

const App = () => (
    <Home/>
);
ReactDOM.render(<App />, document.getElementById("app"));
