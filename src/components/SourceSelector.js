import React from "react";
export default class SourceSelector extends React.Component {
  render() {
    return (
      <section className="source-selector">
        <ul>
          <li className="source-selector__list-elem source--active">
            Source 1
          </li>
          <li className="source-selector__list-elem">Source 2</li>
          <li className="source-selector__list-elem">Source 3</li>
          <li className="source-selector__list-elem">Source 4</li>
          <li className="source-selector__list-elem">Source 5</li>
          <li className="source-selector__list-elem">Source 6</li>
        </ul>
      </section>
    );
  }
}
