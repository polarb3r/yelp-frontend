import React, { Component } from 'react';
import "./style.css";

import RestaurantReview from '../../components/RestaurantReview';

class RestaurantReviewsTable extends Component {
  render() {
    return (
      <div id="resReviewTableContainer">
        <ul className="reviewTable">
          <li id="reviewTableHead"><b>Reviews</b></li>
          <RestaurantReview />
          <RestaurantReview />
          <RestaurantReview />
        </ul>
      </div>
    );
  }
}


export default RestaurantReviewsTable;
