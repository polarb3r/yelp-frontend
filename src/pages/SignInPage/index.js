import React, { Component } from 'react';
import "./style.css";

class SignInPage extends Component {
  render() {
    return (
      <div>
        <div className="signInContainer">
          <ul>
            <li id="signInHeader">Sign in</li>
            <li className="signInli">Email</li>
            <input className="signInInput" placeholder="e.g. full.english.is.the.best@a.restaurant.com" />
            <li className="signInli">Password</li>
            <input className="signInInput" placeholder="please tell me your password isn't 'password'" />
          </ul>
        </div>
        <div id="signInButtonContainer">
          <button id="signInPageButton" className="signInButtons">Sign In</button>
          <button id="signInPageForgotPasswordButton" className="signInButtons">Forgot your password?</button>
          <p id="signInPageSignUpButtonText">don't have an account yet?</p>
          <button id="signInPageSignUpButton" className="signInButtons">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignInPage;
