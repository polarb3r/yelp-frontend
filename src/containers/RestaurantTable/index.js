import React, { Component } from 'react';

import "./style.css";

import RestaurantResults from "../../components/RestaurantResults";

class RestaurantTable extends Component {
  render() {
    return (
      <div id="tableContainer">
        <table className="homePageTable">
          <thead id="homePageTablethead">
            <tr>
              <th className="homePageTableTH">Name</th>
              <th className="homePageTableTH">Address</th>
              <th className="homePageTableTH">Phone</th>
              <th className="homePageTableTH">Website</th>
            </tr>
          </thead>
          <tbody id="homePageTabletbody">
              <RestaurantResults />
              <RestaurantResults />
              <RestaurantResults />
          </tbody>
        </table>
      </div>
    );
  }
}


export default RestaurantTable;
