import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../images/logo.png";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerContainerLeft">
          <div className="headerLogo">
            <NavLink to="/"><img className="headerLogo headerContainerLeftContent" src={ logo } alt="logo" /></NavLink>
          </div>
          <NavLink to="/about" className="headerContainerLeftContent">About</NavLink>
          <NavLink to="/contact" className="headerContainerLeftContent">Contact</NavLink>
          <input id="headerInput" className="headerContainerLeftContent" placeholder="get in my belly..." />
          <button id="headerButton" className="headerContainerLeftContent">Search</button>
        </div>
        <div className="headerContainerRight">
          <NavLink to="/sign-up" className="headerContainerRightContent">Sign up</NavLink>
          <NavLink to="/sign-in" className="headerContainerRightContent">Sign in</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
