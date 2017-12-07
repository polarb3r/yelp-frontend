import React, { Component } from 'react';
import "./style.css";

import RatingSelector from "../RatingSelector";

class ResReviewRating extends Component {
  render() {
    return (
      <div>
        <RatingSelector />
        <li className="resPageli">number of reviews</li>
        <button id="resPageReviewButton" className="resPageButtons">Review</button>
      </div>
    );
  }
}

export default ResReviewRating;
