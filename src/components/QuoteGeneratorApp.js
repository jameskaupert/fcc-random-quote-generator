import React from "react";
import SourceSelector from "./SourceSelector";
import QuoteViewer from "./QuoteViewer";

export default class QuoteGeneratorApp extends React.Component {
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <QuoteViewer />

        <SourceSelector />
      </div>
    );
  }
}
