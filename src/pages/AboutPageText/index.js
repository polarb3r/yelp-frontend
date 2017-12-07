import React, { Component } from 'react';
import "./style.css";

import logo from "../../images/logo.png";
import gabo from "../../images/gabo.png";
import patrick from "../../images/patrick.png";

class AboutPageText extends Component {
  render() {
    return (
      <div>
        <div className="imageContainer">
          <img className="creators" src={ gabo } alt="Gabriel Perdomo" />
          <img id="aboutLogo" src={ logo } alt="logo" />
          <img className="creators" src={ patrick } alt="Patrick Pintaske" />
        </div>
        <div className="aboutContainer">
          <ul>
            <li>Our mission is to be the best way to find a <b>F</b>ull <b>E</b>nglish <b>B</b>reakfast.</li>
            <li>Find local spots to enjoy your favourite Full English (all day) Breakfast. Search, Find, Rate and Review.</li>
            <li id="aboutTextGrey">where do you get yours?</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AboutPageText;
