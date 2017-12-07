import React, { Component } from 'react';
import "./style.css";

import ResReviewRating from "../../components/ResReviewRating";

class ResInfo extends Component {
  render() {
    return (
      <div>
        <li><img /></li>
        <li id="resPageHeader"><b>{ this.props.restaurant.name }</b></li>
        <ResReviewRating />
        <li className="resPageli"><b>Website:</b></li>
        <li className="resPageli"><b>Phone:</b></li>
        <li className="resPageli"><b>Adress:</b></li>
      </div>
    );
  }
}

export default ResInfo;
