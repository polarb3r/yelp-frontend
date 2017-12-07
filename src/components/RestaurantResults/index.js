import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import "./style.css";

class RestaurantResults extends Component {
  render() {
    return (
        <tr onClick={() => {this.props.history.push('url')}}>
          <td className="homePageTabletd">Fork & Bottle</td>
          <td className="homePageTabletd">Allmendstrasse 20, 8002 Zürich</td>
          <td className="homePageTabletd">044 201 18 17</td>
          <td className="homePageTabletd"><a href="http://www.forkandbottle.ch">www.forkandbottle.ch</a></td>
        </tr>
    );
  }
}

export default RestaurantResults;
