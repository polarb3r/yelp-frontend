import React, { Component } from 'react';
import "./style.css";

import RestaurantTable from '../../containers/RestaurantTable'

class SearchPage extends Component {
  render() {
    return (
      <div>
        <div id="searchPageTableContainer">
          <RestaurantTable />
        </div>
      </div>
    );
  }
}



export default SearchPage;
