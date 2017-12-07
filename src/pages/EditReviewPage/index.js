import React, { Component } from 'react';
import "./style.css";

import RatingSelector from "../../components/RatingSelector";

// make sure the file imports the existing review and stars

class EditReviewPage extends Component {
  render() {
    return (
      <div>
        <div className="editReviewContainer">
          <ul>
            <li id="editReviewHeader"><b>Edit Review</b></li>
            <li className="editReviewli">Comment</li>
            <textarea id="editReviewInput" placeholder="let us know what you have to say" />
            <li id="ratingText" className="editReviewli">Rating</li>
            <RatingSelector />
            <button id="editReviewPageSendButton" className="editReviewButtons">Post Review</button>
          </ul>
        </div>
        <div id="editReviewButtonContainer">
          <button id="editReviewBackButton" className="editReviewButtons">Back</button>
        </div>
      </div>
    );
  }
}

export default EditReviewPage;
