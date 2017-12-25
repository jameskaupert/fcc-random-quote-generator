import React from "react";

export default class QuoteGeneratorApp extends React.Component {
  render() {
    return (
      <div id="quote-box" className="quote-box">
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
        <section className="source-selector">
            <ul>
              <li className="source-selector__list-elem source--active">Source 1</li>
              <li className="source-selector__list-elem">Source 2</li>
              <li className="source-selector__list-elem">Source 3</li>
              <li className="source-selector__list-elem">Source 4</li>
              <li className="source-selector__list-elem">Source 5</li>
              <li className="source-selector__list-elem">Source 6</li>
            </ul>
        </section>
      </div>
    );
  }
}
