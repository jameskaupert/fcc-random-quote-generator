import React from "react";
export default class QuoteViewer extends React.Component {
  render() {
    return (
      <section className="quote-viewer">
        <div id="text">
          <p className="quote-box__text">
            It does not matter how slowly you go as long as you do not stop.
          </p>
        </div>
        <div id="author">
          <p>Confucius</p>
        </div>
        <button id="new-quote">New quote</button>
        <button id="tweet-quote">Tweet It</button>
      </section>
    );
  }
}
