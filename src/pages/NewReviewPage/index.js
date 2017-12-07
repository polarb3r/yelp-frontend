import React, { Component } from 'react';
import "./style.css";

import RatingSelector from "../../components/RatingSelector";

class NewReviewPage extends Component {
  render() {
    return (
      <div>
        <div className="newReviewContainer">
          <ul>
            <li id="newReviewHeader"><b>New Review</b></li>
            <li className="newReviewli">Comment</li>
            <textarea id="newReviewInput" placeholder="let us know what you have to say" />
            <li id="ratingText" className="newReviewli">Rating</li>
            <RatingSelector />
            <button id="newReviewPageSendButton" className="newReviewButtons">Post Review</button>
          </ul>
        </div>
        <div id="newReviewButtonContainer">
          <button id="newReviewBackButton" className="newReviewButtons">Back</button>
        </div>
      </div>
    );
  }
}

export default NewReviewPage;
