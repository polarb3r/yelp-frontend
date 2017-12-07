import React, { Component } from 'react';
import "./style.css";

import ResInfo from "../../containers/ResInfo";
import ResGoogleMaps from "../../components/ResGoogleMaps";
import RestaurantReviewsTable from "../../containers/RestaurantReviewsTable";

class RestaurantPage extends Component {
  // Test

  constructor(props) {
    super(props);

    this.state = {
      restaurant: {}
    };
  }


  componentWillMount() {
    const headers = {
      "method": "GET",
      "Content-Type": "application/json"
    }

    fetch('http://localhost:3030/api/restaurants/5a0c69c0fa86c71dcf7a9cde', headers)
    .then(res => res.json())
    .then(restaurant => {
      this.setState({restaurant})
    })
    .catch(err => {
      console.log(err);
    })
  }




  // Test


  render() {
    return (
      <div>
        <div id="resPageContainer">
          <div id="resPageInfoContainer">
            <ul>
              <ResInfo restaurant={ this.state.restaurant }/>
              <ResGoogleMaps />
            </ul>
          </div>
          <div id="resPageReviewContainer">
            <RestaurantReviewsTable />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantPage;
