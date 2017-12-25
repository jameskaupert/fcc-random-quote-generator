import React from "react";
import ReactDOM from "react-dom";
import QuoteGeneratorApp from "./components/QuoteGeneratorApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <div className="main-container">
    <QuoteGeneratorApp />
  </div>,
  document.getElementById("app")
);
