import React, { Component } from 'react';
import "./style.css";

class ForgotPasswordPage extends Component {
  render() {
    return (
      <div>
        <div className="forgotPasswordContainer">
          <ul>
            <li id="forgotPasswordHeader"><b>Forgot your password?</b></li>
            <li id="forgotPasswordli">Email</li>
            <input className="forgotPasswordInput" placeholder="e.g. full.english.is.the.best@a.restaurant.com" />
          </ul>
        </div>
        <div id="forgotPasswordButtonContainer">
          <button id="forgotPasswordPageSendButton" className="forgotPasswordButtons">Send me reset password email</button>
          <p id="forgotPasswordPageAltText">Alternatively</p>
          <button id="forgotPasswordPageSignInButton" className="forgotPasswordButtons">Sign In</button>
          <button id="forgotPasswordPageSignUpButton" className="forgotPasswordButtons">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default ForgotPasswordPage;
