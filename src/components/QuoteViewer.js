import React from "react";

const QuoteViewer = props => (
  <section className="quote-viewer">
    <div className="quote-container">
      <div id="text">
        <p className="quote-viewer__text">{props.displayedQuote}</p>
      </div>
      <div id="author">
        <p className="quote-viewer__author">- {props.displayedAuthor}</p>
      </div>
    </div>
    <div className="btn-container">
      <button
        id="new-quote"
        className="btn"
        onClick={props.getNewRandomQuote}>
        New quote
      </button>
      <a id="tweet-quote" className="btn">
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export { QuoteViewer as default };
