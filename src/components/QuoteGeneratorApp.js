import React from "react";
import SourceSelector from "./SourceSelector";
import QuoteViewer from "./QuoteViewer";
import quoteData from "../data/quotes.js";

export default class QuoteGeneratorApp extends React.Component {
  state = {
    displayedQuote: undefined,
    displayedAuthor: undefined
  };
  getNewRandomQuote = () => {
    const randIndex = Math.floor(Math.random() * quoteData.length);
    this.setState(() => ({
      displayedQuote: quoteData[randIndex].quote,
      displayedAuthor: quoteData[randIndex].author
    }));
  };

  componentDidMount() {
    this.getNewRandomQuote();
    this.setState(() => ({ quotes: quoteData }));
  }
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <QuoteViewer
          displayedQuote={this.state.displayedQuote}
          displayedAuthor={this.state.displayedAuthor}
          getNewRandomQuote={this.getNewRandomQuote}
        />
      </div>
    );
  }
}
