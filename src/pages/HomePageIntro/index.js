import React, { Component } from 'react';
import "./style.css";

import logo from "../../images/logo.png";
import RestaurantTable from '../../containers/RestaurantTable'

class HomePageIntro extends Component {
  render() {
    return (
      <div>
        <div className="introContainer">
          <div>
            <img id="introLogo" src={ logo } alt="logo" />
          </div>
          <div className="introText">
            <p>...for the best way to find a <b>F</b>ull <b>E</b>nglish <b>B</b>reakfast.</p>
            <p>Find local spots to enjoy your favourite Full English (all day) Breakfast. Search, Find, Rate and Review.</p>
            <p id="introTextGrey"><b>Try it now.</b></p>
          </div>
        </div>
        <div id="homePageTableContainer">
          <RestaurantTable />
        </div>
      </div>
    );
  }
}


export default HomePageIntro;
